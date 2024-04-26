import React, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CommentCard from '../components/CommentCard';
import { AuthContext } from '../context/AuthContext';
const url = import.meta.env.VITE_BACKEND_URL;
const chars = 4000; 

const BookPage = () => {
    const { user, dispatch } = useContext(AuthContext);

    const {id} = useParams()
    const [page, setPage] = useState(1);
    const [text, setText] = useState("");
    const [info, setInfo] = useState("");
    const [totalPages, setTotalPages] = useState(0);
    const [comments, setComments] = useState([])
    const [credentials, setCredentials] = useState({
        username: user?.name,
        comment: undefined,
        rate: 1,
    });
    
    console.log(credentials)

    const handleChange = (e) => {
        const value = e.target.id === 'rate' ? parseInt(e.target.value) : e.target.value;
        setCredentials((prev) => ({ ...prev, [e.target.id]: value }));
    };

    const handleNextPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setPage(prevPage => Math.min(prevPage + 1, totalPages));
    }

    const handlePrevPage = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
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
                setInfo(response.data);
            } catch (error) {
                console.error('Error fetching info:', error);
            }
        };

        fetchData();

        const fetchPages = async () => {
            try {
                const response = await axios.get(`${url}/api/writings/total-pages/${id}?size=${chars}`);
                setTotalPages(response.data);
            } catch (error) {
                console.error('Error fetching pages:', error);
            }
        };

        fetchPages();
    }, []);

    useEffect(()=>{
        const fetchComments = async () => {
            try {
                const response = await axios.get(`${url}/api/writings/${id}/comment`);
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching commets:', error);
            }
        };

        fetchComments();
    },[])

    const handleClick = async (e) => {
        try {
          const res = await axios.post(`${url}/api/comments/${id}`, credentials);
          setCredentials({
            ...credentials, 
            comment: '', 
            rate: 1, 
        });
            const updatedComments = await axios.get(`${url}/api/writings/${id}/comment`);
            setComments(updatedComments.data);
        } catch (err) {
            console.error('Error fetching commets:', err);
        }
      };

    return (
        <div className='flex flex-col items-center'>
            <p className='text-3xl text-pink-500'>{info.name}</p>
            <p>{info?.author?.name}  {info?.author?.surname}</p>
            <p className='mt-7'  style={{ whiteSpace: 'pre-wrap' }}>{text}</p>
            <div className='flex items-center mt-8'>
                <button className='mr-2' onClick={handlePrevPage} disabled={page === 1}>
                    Prev
                </button>
                <span>{page} of {totalPages}</span>
                <button className='ml-2' onClick={handleNextPage} disabled={page === totalPages}>
                    Next
                </button>
            </div>
            <div className='flex flex-col gap-5 mt-5 w-[500px]'>
              
                <div className='flex flex-col gap-3'>
                    <label for="message" class="block text-sm font-medium text-gray-900 dark:text-white">Your comment:</label>
                    <textarea rows="3" 
                        id="comment"
                        onChange={handleChange} 
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>
                    <div className='flex gap-5'>
                        <div>
                            <input type="number" min="1" max="5" id="rate"
                                onChange={handleChange} 
                                className='dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500'/> /5
                        </div>
                        <button onClick={handleClick} className="bg-pink-500 text-white py-3 px-6 rounded-[32px] transform hover:translate-y-[-3px] transition-all duration-300 h-fit mt-auto">
                                Submit
                        </button>
                    </div>
                </div>
                <div>
                    {comments.map((comment) => (
                        <CommentCard key={comment.id} props={comment} />
                    ))}
                </div>
            </div>
        </div> 
    );
}

export default BookPage;
