import { LikeDislikeProps } from "@/types";
import Image from "next/image";
import React, { useState } from "react";

const LikeDislike: React.FC<LikeDislikeProps> = ({ initialLikes, initialDislikes }) => {
  const [likes, setLikes] = useState(initialLikes);
  const [dislikes, setDislikes] = useState(initialDislikes);
  const [userAction, setUserAction] = useState<"like" | "dislike" | null>(null);

  const handleLike = () => {
    if (userAction !== "like") {
      setLikes(likes + 1);
      setUserAction("like");
      if (userAction === "dislike") {
        setDislikes(dislikes - 1);
      }
    } else {
      setLikes(likes - 1);
      setUserAction(null);
    }
  };

  const handleDislike = () => {
    if (userAction !== "dislike") {
      setDislikes(dislikes + 1);
      setUserAction("dislike");
      if (userAction === "like") {
        setLikes(likes - 1);
      }
    } else {
      setDislikes(dislikes - 1);
      setUserAction(null);
    }
  };

  return (
    <div className="flex items-center">
      <button className={`flex items-center hover:bg-blue-700 bg-blue-500 text-black font-bold py-2 px-4 mr-2 rounded ${userAction === "like" ? 'glow-like' : ''}`} onClick={handleLike}>
        <Image src="/like.png" alt="Like" width={20} height={20} className="h-5 w-5 mr-1" />{likes}
      </button>
      <button className={`flex items-center hover:bg-red-700 bg-red-500 text-black font-bold py-2 px-4 rounded ${userAction === "dislike" ? 'glow-dislike' : ''}`} onClick={handleDislike}>
        <Image src="/dislike.png" alt="Dislike" width={20} height={20} className="h-5 w-5 mr-1" />{dislikes}
      </button>
      <style jsx>{`
        .glow-like {
          box-shadow: 0 0 10px 2px #2196F3;
        }
        .glow-dislike {
          box-shadow: 0 0 10px 2px #F44336;
        }
      `}</style>
    </div>
  );
};

export default LikeDislike;
