import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
    <h1 className="text-4xl font-bold mb-4">Welcome to Dashboard-Web!</h1>
    <p className="text-lg mb-8 text-gray-600 max-w-xl">
      This is your modern dashboard application. Use the navigation below to access users, reports, and your main dashboard overview.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full max-w-md">
      <Link to="/dashboard" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold transition text-center">Dashboard</Link>
      <Link to="/users" className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold transition text-center">Users</Link>
      <Link to="/reports" className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded shadow-lg text-lg font-semibold transition text-center">Reports</Link>
    </div>
  </div>
);

export default Home; 