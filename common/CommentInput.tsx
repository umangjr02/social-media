"use client";

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
    <div className="flex items-center rounded-lg px-2 w-full">
      <input
        type="text"
        placeholder="Add a comment..."
        className="border bg-transparent text-sm text-gray-800 w-full pl-2 pr-2 py-2 comment-input"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        onKeyUp={handleKeyUp}
      />

      <button
        className="text-blue-500 hover:text-blue-700 font-semibold"
        onClick={handleCommentSubmit}
      >
        Post
      </button>
    </div>
  );
};

export default CommentInput;
