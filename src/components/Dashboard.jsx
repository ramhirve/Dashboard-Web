import { useEffect, useState } from 'react';
import SummaryCards from './SummaryCards';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios.get('https://dummyjson.com/users')
            .then(res => setUsers(res.data.users))
            .catch(() => setUsers([]));
    }, []);

    const recentUsers = users.slice(-5).reverse();

    // Prepare data for the user growth chart
    const growthData = users.map((user, idx) => ({
        name: `User ${user.id}`,
        Users: idx + 1
    }));

    return (
        <div className="p-4 sm:p-8">
            <h2 className="text-3xl font-bold mb-6">Dashboard Overview</h2>
            <SummaryCards total={users.length} />

            {/* Quick Actions */}
            <div className="flex flex-wrap gap-4 my-8">
                 <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow font-semibold transition">+ Add User</button> 
                <Link to="/users" className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow font-semibold transition">View All Users</Link>
                <Link to="/reports" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded shadow font-semibold transition">Go to Reports</Link>
            </div>

            {/* User Growth Chart */}
            <div className="bg-white dark:bg-gray-900 rounded shadow p-4 mb-10 w-full max-w-2xl mx-auto">
                <h3 className="text-lg font-semibold mb-4">User Growth</h3>
                <ResponsiveContainer width="100%" height={250}>
                    <LineChart data={growthData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" hide />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Line type="monotone" dataKey="Users" stroke="#2563eb" strokeWidth={3} dot={false} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Recent Users */}
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4">Recent Users</h3>
                <div className="overflow-x-auto rounded shadow">
                    <table className="min-w-full bg-white dark:bg-gray-900">
                        <thead className="bg-gray-200">
                            <tr>
                                <th className="text-left py-2 px-4">ID</th>
                                <th className="text-left py-2 px-4">Name</th>
                                <th className="text-left py-2 px-4">Email</th>
                                <th className="text-left py-2 px-4">Avatar</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentUsers.map((user) => (
                                <tr key={user.id} className="border-t">
                                    <td className="py-2 px-4">{user.id}</td>
                                    <td className="py-2 px-4">{user.firstName} {user.lastName}</td>
                                    <td className="py-2 px-4">{user.email}</td>
                                    <td className="py-2 px-4">
                                        <img src={user.image} alt="avatar" className="w-10 h-10 rounded-full" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;