import { useState } from 'react';

const BlogModal = ({data, setShowModal}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!title || !description || !type) {
      setError("All fields Required!");
      return;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-white p-5 rounded w-80">
        <h2 className="text-lg font-bold mb-3">{data ? "Edit" : "Create"} Vlog</h2>

        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border p-2 mb-2"
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full border p-2 mb-2"
        />
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full border p-2 mb-2"
        >
          <option value="">Select Type</option>
          <option value="Tech">Tech</option>
          <option value="Travel">Travel</option>
        </select>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <div className="flex justify-end gap-2">
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-3 py-1 rounded">Save</button>
          <button className="bg-gray-300 px-3 py-1 rounded " onClick={()=>setShowModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default BlogModal;
