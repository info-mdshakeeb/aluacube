
export default function PostsList({ comments, selectedPostId, setSelectedPostId }) {
  return (
    <div className="w-48 md:w-1/4 p-4 bg-gray-200 overflow-y-scroll">
      <h2 className="text-xl font-bold mb-4">Posts</h2>
      <ul>
        {comments.map((comment) => (
          <li
            key={comment.postId}
            onClick={() => setSelectedPostId(comment?.postId)}
            className={`cursor-pointer hover:bg-gray-300 p-2 rounded ${selectedPostId === comment.postId ? 'bg-blue-200' : ''}`}
          >
            {comment.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

