import React, { useState } from "react";

interface CommentInputProps {
  onCommentSubmit: (commentText: string) => void;
}

const CommentInput: React.FC<CommentInputProps> = ({ onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      onCommentSubmit(commentText);
      setCommentText("");
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommentSubmit();
    }
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="Add a comment..."
        className="border-white-400 `border ${isClicked ? 'border-none' : 'border-gray-300'}` rounded-lg py-2 px-3 w-full text-black"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      <button
        className="bg-gray-500 hover:bg-gray-700 text-black font-bold py-2 px-4 rounded mt-2"
        onClick={handleCommentSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default CommentInput;
