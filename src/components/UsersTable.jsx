import React, { useEffect, useState } from "react";
import axios from "axios";

const USERS_PER_PAGE = 10;

const UsersTable = ({ search, onUsersLoaded }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("https://dummyjson.com/users")
      .then(res => {
        setUsers(res.data.users);
        onUsersLoaded(res.data.users);
        setLoading(false);
      })
      .catch(err => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, [onUsersLoaded]);

  useEffect(() => {
    const filtered = users.filter(user =>
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredUsers(filtered);
    setPage(1); // Reset to first page on search
  }, [search, users]);

  if (loading) return <p className="text-blue-900 p-4 text-2xl font-extrabold">Loading...</p>;
  if (error) return <p className="text-red-500 p-4">{error}</p>;

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);
  const startIdx = (page - 1) * USERS_PER_PAGE;
  const endIdx = startIdx + USERS_PER_PAGE;
  const usersToShow = filteredUsers.slice(startIdx, endIdx);

  return (
    <div className="p-2 sm:p-4">
      <div className="overflow-x-auto rounded shadow">
        <table className="min-w-full bg-white dark:bg-gray-900">
          <thead className="bg-gray-400">
            <tr>
              <th className="text-left py-2 px-4">ID</th>
              <th className="text-left py-2 px-4">Name</th>
              <th className="text-left py-2 px-4">Email</th>
              <th className="text-left py-2 px-4">Avatar</th>
            </tr>
          </thead>
          <tbody>
            {usersToShow.map((user) => (
              <tr key={user.id} className="border-t">
                <td className="py-2 px-4">{user.id}</td>
                <td className="py-2 px-4">
                  {user.firstName} {user.lastName}
                </td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">
                  <img src={user.image} alt="avatar" className="w-10 h-10 rounded-full" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
          disabled={page === 1}
        >
          Prev
        </button>
        {/* Page Numbers */}
        {Array.from({ length: totalPages }, (_, idx) => (
          <button
            key={idx + 1}
            onClick={() => setPage(idx + 1)}
            className={`px-3 py-1 rounded ${page === idx + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-black'}`}
          >
            {idx + 1}
          </button>
        ))}
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="bg-gray-800 text-white px-3 py-1 rounded disabled:opacity-50"
          disabled={page === totalPages || totalPages === 0}
        >
          Next
        </button>
      </div>
    </div>
  );
};
export default UsersTable;
