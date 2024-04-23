import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;

const BookPage = () => {
    const {id} = useParams()
    const [page, setPage] = useState(1);
    const [text, setText] = useState("");
    const [title, setTitle] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const chars = 4000; 

    const handleNextPage = () => {
        setPage(prevPage => Math.min(prevPage + 1, totalPages));
    }

    const handlePrevPage = () => {
        setPage(prevPage => Math.max(prevPage - 1, 1));
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/writings/${id}?page=${page}&size=${chars}`);
                setText(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/writings/info/${id}`);
                setTitle(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();

        const fetchPages = async () => {
            try {
                const response = await axios.get(`${url}/api/writings/total-pages/${id}?size=${chars}`);
                setTotalPages(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchPages();
    }, []);

    console.log(title)

    return (
        <div>
            <p>{title.name}</p>
            <p className='w-[900px]'>{text}</p>
            <div className='flex items-center'>
                <button className='mr-2' onClick={handlePrevPage} disabled={page === 1}>
                    Prev
                </button>
                <span>{page} of {totalPages}</span>
                <button className='ml-2' onClick={handleNextPage} disabled={page === totalPages}>
                    Next
                </button>
            </div>
        </div> 
    );
}

export default BookPage;
