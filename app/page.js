'use client'

import CommentsList from '@/components/CommentList';
import PostsList from '@/components/PostList';
// src/App.js
import React, { useState, useEffect } from 'react';


export default function page() {
  const [comments, setComments] = useState([]);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=100')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);



  if (loading) {
    return <div className='flex h-screen items-center justify-center'>Loading...</div>;
  }

  if (error) {
    return <div className='flex h-screen items-center justify-center'>Error: {error.message}</div>;
  }

  const filteredComments = selectedPostId
    ? comments.filter((comment) => comment.postId === selectedPostId)
    : [];

  return (
    <div className="flex h-screen bg-gray-100 ">
      <PostsList comments={comments} selectedPostId={selectedPostId} setSelectedPostId={setSelectedPostId} />
      <CommentsList filteredComments={filteredComments} />
    </div>
  );
}


