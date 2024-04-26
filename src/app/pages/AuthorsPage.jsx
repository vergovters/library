import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AthorCard from "../components/AthorCard"

const url = import.meta.env.VITE_BACKEND_URL

const AuthorsPage = () => {
    const [authors, setAuthors] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/authors`);
                setAuthors(response.data);
            } catch (error) {
                console.error('Error fetching authors:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
           {authors.map((author)=>{
               return <AthorCard key={author.id} author={author}/>
           })}
        </div>
    );
}

export default AuthorsPage;
