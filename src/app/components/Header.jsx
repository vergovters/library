import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { GiSpy } from "react-icons/gi";

const Header = () => {
    const { user, dispatch } = useContext(AuthContext);


    const logout = async (e) => {
        e.preventDefault();
        try {
        dispatch({ type: "LOGOUT" });
        } catch (err) {
        dispatch({ type: "LOGOUT", payload: err.response.data });
    }
  };
    return (
        <header className="h-24 sm:h-32 flex items-center z-30 w-full dark:bg-gray-800 bg-white">
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <div className="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        Read.ME
                    </div>
                    <div className="flex items-center">
                        <nav className="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <Link to="/" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Home
                            </Link>
                            <Link to="/books" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Books
                            </Link>
                            <Link to="/authors" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Authors
                            </Link>
                            {user ? (
                                <div className='flex text-lg'>
                                    <Link to="/profile" className='py-2 px-6 text-pink-500'>{user.name}</Link>
                                    <button className="flex transform uppercase hover:translate-y-[-3px] transition-all py-2 duration-300 text-lg" onClick={logout}>Logout</button>
                                </div>
                            ): (
                                <Link to="/registration" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                    Register
                                </Link>
                            )}
                        </nav>
                    </div>
                    {
                        user?.isDataAnalytics && <Link className='absolute right-11 text-2xl' to="/statistic"><GiSpy /></Link>
                    }
                </div>
            </header>
    );
}

export default Header;
