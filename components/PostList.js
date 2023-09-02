import React from 'react';

export default function PostList({ comments, onPostClick, selectedPostId }) {
  return (
    <div className="">
      <ul className='overflow-x-scroll rounder-sm  scrollbar-none'>
        {comments.length === 0 ? (
          <p className="text-gray-600">No comments to display. Please valid ID.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li
                key={comment.id}
                className={`cursor-pointer hover:bg-gray-300 p-2 rounded ${selectedPostId === comment.postId ? 'bg-blue-200' : ''}`}
                onClick={() => onPostClick(comment.postId)}
              >
                {comment.name}
              </li>
            ))}
          </ul>
        )}
      </ul>
    </div>
  );
}
