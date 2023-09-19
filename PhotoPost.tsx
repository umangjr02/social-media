import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link"; // Import the Link component
import { UserProfileProps, Comment, PhotoPostProps } from "@/types";
import CommentInput from "@/common/CommentInput";
import LikeDislike from "@/common/LikeDislike";
import UserProfile from "@/common/UserProfile";
import AddFriendButton from "@/common/AddFriendButton";

const PhotoPost: React.FC<PhotoPostProps> = ({
  imageUrl,
  likes: initialLikes,
  dislikes: initialDislikes,
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
        <div className="p-4 flex justify-between items-center">
          <Link href="/user-profile/[username]" as="/user-profile/umang"> {/* Create a link to the user profile page */}
            <a>
              <UserProfile
                userName="Umang Rathod"
                showAddFriendButton={showAddFriendButton}
                onAddFriendClick={handleAddFriendClick}
              />
            </a>
          </Link>
          <AddFriendButton onClick={handleAddFriendClick} />
        </div>

        <Image src="/user-profile.png" alt="Photo" width={500} height={500} className="w-full h-auto" />
      </div>
      <div className="p-4">
        <LikeDislike initialLikes={initialLikes} initialDislikes={initialDislikes} />
      </div>
      <ul className="p-4">
        {comments.map((comment, index) => (
          <li key={index} className={`mb-2 ${index >= initialComments.length ? "text-black" : "text-white"}`}>
            <Link href="/user-profile/[username]" as={`/user-profile/${comment.user}`}>
              <a>
                <UserProfile userName={comment.user} />
              </a>
            </Link>{" "}
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

export default PhotoPost;