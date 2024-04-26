import React, {useEffect, useState} from 'react';
import axios from 'axios';
const url = import.meta.env.VITE_BACKEND_URL;
import WritingCard from '../components/WritingCard';

const StatisticPage = () => {
    const [statistics, setStatistics] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${url}/api/statistics`);
                setStatistics(response.data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };

        fetchData();
    }, []); 

    return (
        <div className="container mx-auto py-8">
            <h1 className="text-3xl font-semibold text-center mb-8">Writing Collection</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {statistics.map(writing => (
                <WritingCard key={writing.id}  props={writing} />
                ))}
            </div>
        </div>
    );
}

export default StatisticPage;
