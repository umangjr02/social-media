import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PhotoPostProps, Comment } from "@/types";
import CommentInput from "@/common/CommentInput";
import LikeDislike from "@/common/LikeDislike";
import UserProfile from "@/common/UserProfile";
import AddFriendButton from "@/common/AddFriendButton";
import { useRouter } from "next/router";

const PhotoPost: React.FC<PhotoPostProps> = ({
  imageUrl,
  likes: initialLikes,
  dislikes: initialDislikes,
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
  // const router = useRouter()

  const handleAddFriendClick = () => {
    // Add your logic for adding a friend here
    // For example, you can update the state to hide the button after adding a friend
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

        <Image src="/download.jpg" alt="Photo" width={500} height={500} className="w-full h-auto" />
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
            <div>
              <UserProfile 
              // onClick={() => {
              //   router.push({
              //     pathname: "/userProfile",
              //     query: { name: `Testing user` }
              //   })
              // }}
              
              userName={comment.user} profileImage={""} userBioDetails={[]} />
            </div>
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
