import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const url = import.meta.env.VITE_BACKEND_URL;

const AuthorPage = () => {
    const { id } = useParams(); 
    const [author, setAuthor] = useState(null); 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/authors/${id}`);
                setAuthor(response.data);
            } catch (error) {
                console.error('Error fetching author:', error);
            }
        };

        fetchData();
    }, [id]); 

    
    return (
        <div className='flex gap-[100px]'>
            {author && ( 
                <>
                    <div className="rounded-full overflow-hidden w-[400px] h-[400px] z-10">
                        <img src={author.avatarUrl} alt="Rectangular Image" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <p className='text-3xl mb-2 mt-[100px]'>{author.name} {author.surname}</p>
                        <p className='w-[700px]'>{author.description}</p>
                    </div>
                </>
            )}
        </div>
    );
}

export default AuthorPage;