import React from 'react';
import { Link } from 'react-router-dom';

const AthorCard = ({ author }) => {
    return (
        <div className='border border-solid border-pink-500 p-4 m-6 rounded-md'> 
            <Link to={`/authors/${author.id}`} >
                <p>{author.name} {author.surname}</p>
            </Link>
        </div>
     
    );
}

export default AthorCard;