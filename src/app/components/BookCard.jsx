import React from 'react';
import { Link } from 'react-router-dom';

const AthorCard = ({ book }) => {
    return (
        <div className='border border-solid border-pink-500 p-4 m-6 rounded-md'> 
            <Link to={`/books/${book.id}`} >
                <p className='text-3xl'>{book.name}</p>
                <p className='text-pink-500'>{book.author.name} {book.author.surname}</p>
                <p>{book.description}</p>
            </Link>
        </div>
     
    );
}

export default AthorCard;