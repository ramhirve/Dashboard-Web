import { useEffect, useState } from 'react';
import SummaryCards from './SummaryCards';
import axios from 'axios';

const Reports = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => setUsers(res.data.users))
            .catch(() => setUsers([]));
    }, []);
    return <SummaryCards total={users.length} />;
};
export default Reports; 