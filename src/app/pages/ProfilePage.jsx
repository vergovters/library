import React, {useState, useContext} from 'react';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';
const url = import.meta.env.VITE_BACKEND_URL;

const ProfilePage = () => {
    
    const { user ,loading, error, dispatch } = useContext(AuthContext);
    const [credentials, setCredentials] = useState({
        username: user?.name,
        password: undefined,
    });

    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };


    const handleClick = async (e) => {
        e.preventDefault();
        try {
          const res = await axios.put(`${url}/api/users`, credentials);
        } catch (err) {
            console.log(err)
        }
      };

    return (
        <div className="flex flex-col justify-center items-center">
        <h2 className='dark:text-white text-3xl font-bold mb-11'>Change your password <span className='text-pink-500'>READ.ME</span></h2>
    <form  autoComplete="off">
      <div className='mb-6'>
        <label htmlFor="username" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Username:
        </label>
        <input className='text-black'
          required="true"
          type="text"
          placeholder={user?.name}
          id="username"
          disabled
          onChange={handleChange}
          class="w-[500px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
       
      </div>
      <div className='mb-6'>
        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           New password:
        </label>
        <input className='text-black'
          required="true"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
      </div>
      <div >
        <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           Confirm password:
        </label>
        <input className='text-black'
          required="true"
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        
      </div>
      <button
        disabled={loading}
        onClick={handleClick}
        className="bg-pink-500 text-white py-3 px-6 rounded-xl mt-7 transform hover:translate-y-[-3px] transition-all duration-300 h-fit w-full"
      >
        Login
      </button>
    </form>
  </div>
    );
}

export default ProfilePage;
