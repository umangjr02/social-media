// VideoPost.tsx

import React, { useState } from "react";
import LikeDislike from "@/common/LikeDislike";
import UserProfile from "@/common/UserProfile";
import CommentInput from "@/common/CommentInput";
import { VideoPostProps, Comment } from "@/types";
import AddFriendButton from "@/common/AddFriendButton";
import Link from "next/link";

const VideoPost: React.FC<VideoPostProps> = ({
  videoUrl,
  likeCount: initialLikes,
  dislikeCount: initialDislikes,
  comments: initialComments,
}) => {
  const [comments, setComments] = useState<Comment[]>([]);
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
    setShowAddFriendButton(false);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden md:max-w-lg lg:max-w-xl">
      <div className="p-4">
        <div className="p-4 flex justify-between items-center">
          <Link href="/userProfile">
            <UserProfile
              userName="Umang Rathod"
              showAddFriendButton={showAddFriendButton}
              onAddFriendClick={handleAddFriendClick}
              profileImage={""}
              userBioDetails={[]}
            />
          </Link>
          <AddFriendButton onClick={handleAddFriendClick} />
        </div>

        <div className="relative">
        <VideoPost videoUrl="/my-video.mp4" comments={[]} likeCount={0} dislikeCount={0} />
        </div>
      </div>
      <div className="p-4">
        <LikeDislike initialLikes={initialLikes} initialDislikes={initialDislikes} />
      </div>
      <ul className="p-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className={`mb-2 ${index >= initialComments.length ? "text-black" : "text-white"}`}
          >
            <Link href={`/userProfile`}>
              <UserProfile userName={comment.user} profileImage={""} userBioDetails={[]} imageWidth={0} imageHeight={0} />
            </Link>
            {comment.text}
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
