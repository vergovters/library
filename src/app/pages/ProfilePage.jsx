import React, { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const url = import.meta.env.VITE_BACKEND_URL;

const ProfilePage = () => {
    const { user} = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        username: user?.name,
        newPassword: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault();
        if (credentials.newPassword !== credentials.confirmPassword) {
            console.log('Passwords do not match');
            return;
        }
        try {
            const res = await axios.put(`${url}/api/users/${user?.id}`, {
                username: credentials.username,
                password: credentials.newPassword,
            });
            navigate("/")
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className='dark:text-white text-3xl font-bold mb-11'>Change your password <span className='text-pink-500'>READ.ME</span></h2>
            <form autoComplete="off">
                <div className='mb-6'>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Username:
                    </label>
                    <input
                        required={true}
                        type="text"
                        placeholder={user?.name}
                        id="username"
                        disabled
                        onChange={handleChange}
                        className="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
               
                <div className='mb-6'>
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        New password:
                    </label>
                    <input
                        required={true}
                        type="password"
                        placeholder="New password"
                        id="newPassword"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <div className='mb-6'>
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Confirm new password:
                    </label>
                    <input
                        required={true}
                        type="password"
                        placeholder="Confirm new password"
                        id="confirmPassword"
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                </div>
                <button
                    onClick={handleClick}
                    className="bg-pink-500 text-white py-3 px-6 rounded-xl mt-7 transform hover:translate-y-[-3px] transition-all duration-300 h-fit w-full"
                >
                    Change Password
                </button>
            </form>
        </div>
    );
}

export default ProfilePage;
