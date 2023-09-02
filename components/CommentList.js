import React from 'react';

export default function CommentList({ comments }) {
  return (
    <div className="w-3/4 p-4 bg-white overflow-y-scroll relative">
      <h2 className="text-xl font-bold mb-4">Comments</h2>
      <ul>

        {comments.length === 0 ? (
          <p className="text-gray-600">No comments to display. Please select a post.</p>
        ) : (
          <ul>
            {comments.map((comment) => (
              <li key={comment.id} className="mb-4 p-2 border rounded shadow-sm hover:bg-slate-100 duration-300">
                <strong className="text-blue-600 cursor-pointer">{comment.email}</strong>
                <p className="mt-2">{comment.body}</p>
              </li>
            ))}
          </ul>
        )}

      </ul>
    </div>
  );
}

