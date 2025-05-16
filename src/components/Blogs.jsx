import { useState, useEffect } from 'react';
import BlogModal from './BlogModal';

const Blogs = ({}) => {
    const [blogs, setBlogs] = useState([]);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        const getBlogs = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
            const data = await res.json();
            const formatted = data.map(post => ({
                id: post.id,
                title: post.title,
                description: post.body,
                type: 'Tech',
                createdAt: new Date()
            }));
            setBlogs(formatted);
        };
        getBlogs();
    }, []);


    return (
        <div className="p-5 max-w-xl mx-auto">
            <button
                onClick={() => setShowModal(true)}
                className="mb-4 bg-green-600 text-white px-4 py-2 rounded"
            >
                Create Vlog
            </button>

            {blogs.map(blog => (
                <div key={blog.id} className="border p-4 mb-3 rounded">
                    <h3 className="text-lg font-bold">{blog.title}</h3>
                    <p>{blog.description}</p>
                    <small className="text-gray-600">{blog.type}</small>
                    <div className="mt-2 flex gap-2">
                        <button className="bg-yellow-400 px-2 rounded">Edit</button>
                        <button className="bg-red-500 text-white px-2 rounded">Delete</button>
                    </div>
                </div>
            ))}
            {showModal ? <BlogModal setShowModal={setShowModal}/> : ""}
            
        </div>
    );
};

export default Blogs;
