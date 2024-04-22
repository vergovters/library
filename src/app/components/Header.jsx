import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header class="h-24 sm:h-32 flex items-center z-30 w-full dark:bg-gray-800 bg-white">
                <div class="container mx-auto px-6 flex items-center justify-between">
                    <div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
                        Read.ME
                    </div>
                    <div class="flex items-center">
                        <nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
                            <Link to="/" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Home
                            </Link>
                            <Link to="/books" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Books
                            </Link>
                            <Link to="/authors" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Authors
                            </Link>
                            <Link to="/registration" className="py-2 px-6 flex transform hover:translate-y-[-3px] transition-all duration-300">
                                Register
                            </Link>
                        </nav>
                        <button class="lg:hidden flex flex-col ml-4">
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                            <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                            </span>
                        </button>
                    </div>
                </div>
            </header>
    );
}

export default Header;
