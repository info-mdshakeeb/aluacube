'use client'
import React, { useState, useEffect } from 'react';
import FilterInput from '@/components/FilterInput';
import CommentsList from '@/components/CommentList';
import PostsList from '@/components/PostList';

export default function page() {
  const [comments, setComments] = useState([]);
  const [filteredComments, setFilteredComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
        setFilteredComments(data);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) { return <div className='flex h-screen items-center justify-center'>Loading...</div>; }

  if (error) { return <div className='flex h-screen items-center justify-center'>Error: {error.message}</div>; }

  const handleFilterChange = (postId) => {
    if (postId === '') {
      setFilteredComments(comments);
    } else {
      const filtered = comments.filter((comment) => comment.postId.toString() === postId);
      setFilteredComments(filtered);
    }
  };

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
  };

  return (
    <div className="flex h-screen bg-gray-100 ">
      <div className="w-48 md:w-1/4  bg-gray-200 overflow-y-scroll relative scrollbar-none">
        <div className="sticky top-0  bg-slate-200 p-1 md:p-4 border-b-2 border-gray-300">
          <h2 className="text-xl font-bold mb-4">Posts</h2>
          <FilterInput onFilterChange={handleFilterChange} />
        </div>
        <div className="p-1 md:p-4 ">
          <PostsList
            comments={filteredComments}
            onPostClick={handlePostClick}
            selectedPostId={selectedPostId}
          />
        </div>
      </div>
      <CommentsList
        selectedPostId={selectedPostId}
        setSelectedPostId={setSelectedPostId}
        comments={comments.filter((comment) => comment.postId === selectedPostId)}
      />
    </div>
  );
}

