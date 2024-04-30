import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from '../components/BookCard';

const url = import.meta.env.VITE_BACKEND_URL;
const ITEMS_PER_PAGE = 10; 

const BooksPage = () => {
    const [books, setBooks] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/writings`);
                setBooks(response.data);
            } catch (error) {
                console.error('Error fetching books:', error);
            }
        };

        fetchData();
    }, []);

    const totalPages = Math.ceil(books.length / ITEMS_PER_PAGE);
    const indexOfLastBook = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstBook = indexOfLastBook - ITEMS_PER_PAGE;
    const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    };

    return (
        <div>
            {currentBooks.map((book) => {
                return <BookCard key={book.id} book={book} />;
            })}
            <div className='flex items-center'>
                <button className='mr-2 hover:cursor-pointer' onClick={handlePrevPage} disabled={currentPage === 1}>
                    Prev
                </button>
                <span>{currentPage} of {totalPages}</span>
                <button className='ml-2 hover:cursor-pointer' onClick={handleNextPage} disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default BooksPage;