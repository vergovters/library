import React, {useContext} from 'react';
import { AuthContext } from '../context/AuthContext';

const BooksPage = () => {
    const { user ,loading, error, dispatch } = useContext(AuthContext);
    return (
        <div>
            bookspage
        </div>
    );
}

export default BooksPage;
