import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests
import genres from '../config/Genres';
import BookCard from '../components/WritingCard';
const url = import.meta.env.VITE_BACKEND_URL

const SearchPage = () => {
    const location = useLocation();
    const { query, genreName } = location.state || {};
    const [writing, setWriting] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const selectedGenre = genres.find(genre => genre.name === genreName);
                const genreId = selectedGenre?.id || '';
                const response = await axios.get(`${url}/api/writings/search?query=${query}&genres=${genreId}`);
                setWriting(response.data);
            } catch (error) {
                console.error('Error fetching writings:', error);
            }
        };

        fetchData();
    }, []); 

    console.log(writing);

    return (
        <div>
            {
                writing.map(writing => (
                    <Link to={`/books/${writing.id}`} key={writing.id}>
                        <div className='border border-solid border-pink-500 p-4 m-6 rounded-md'>
                            <div className='flex text-pink-500 text-xl'>{writing.name} -  
                                <ul className='flex'>
                                    {writing.genres && writing.genres.map((genre, index) => (
                                        <li className='ml-2 text-gray-500' key={index}> {genre}</li>
                                    ))}
                                </ul>
                            </div>
                            <p>
                                {writing.description}
                            </p>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
}

export default SearchPage;