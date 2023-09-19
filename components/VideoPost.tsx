import React, { useState } from "react";
import LikeDislike from "@/common/LikeDislike";
import UserProfile from "@/common/UserProfile";
import CommentInput from "@/common/CommentInput";
import { VideoPostProps, Comment } from "@/types";

const VideoPost: React.FC<VideoPostProps> = ({
  videoUrl,
  likeCount: initialLikes,
  dislikeCount: initialDislikes,
  comments: initialComments,
}) => {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [showAddFriendButton, setShowAddFriendButton] = useState(true);

  const handleCommentSubmit = (commentText: string) => {
    if (commentText.trim() !== "") {
      const newComment: Comment = {
        user: "Umang Rathod",
        text: commentText,
      };
      setComments([...comments, newComment]);
    }
  };

  const handleAddFriendClick = () => {
    // Add your logic for adding a friend here
    // For example, you can update the state to hide the button after adding a friend
    setShowAddFriendButton(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg lg:max-w-xl">
      <div className="p-4">
        <div className="p-4">
          <UserProfile
            userName="Umang Rathod"
            showAddFriendButton={showAddFriendButton}
            onAddFriendClick={handleAddFriendClick}
          />
        </div>

        <div className="relative">
          <video src={videoUrl} className="w-full" controls></video>
        </div>
      </div>
      <div className="p-4">
        <LikeDislike initialLikes={initialLikes} initialDislikes={initialDislikes} />
      </div>
      <ul className="p-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className={`mb-2 ${index >= initialComments.length ? 'text-black' : 'text-white'}`}
          >
            <UserProfile userName={comment.user} /> {comment.text}
          </li>
        ))}
      </ul>
      <div className="p-4">
        <CommentInput onCommentSubmit={handleCommentSubmit} />
      </div>
    </div>
  );
};

export default VideoPost;
