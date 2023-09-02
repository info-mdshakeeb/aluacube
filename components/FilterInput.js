import React, { useState } from 'react';

export default function FilterInput({ onFilterChange }) {
  const [postId, setPostId] = useState('');
  const handleChange = (event) => {
    const value = event.target.value;
    setPostId(value);
    onFilterChange(value);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-2 lg:items-center">
      <label htmlFor="postId">Filter by Post ID:</label>
      <input
        type="number"
        className='border border-gray-400  rounded p-1 w-40 md:w-auto'
        id="postId"
        value={postId}
        onChange={handleChange}
        placeholder="Enter Post ID"
      />
    </div>
  );
}

