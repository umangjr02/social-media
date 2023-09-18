import React from "react";

interface PhotoPostProps {
  imageUrl: string;
  likes: number;
  dislikes: number;
  comments: string[];
}

const PhotoPost: React.FC<PhotoPostProps> = ({ imageUrl, likes, dislikes, comments }) => {
  return (
    <div>
      <img src={imageUrl} alt="Photo" />
      <div>
        <button>Like ({likes})</button>
        <button>Dislike ({dislikes})</button>
        <button>Comment</button>
      </div>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoPost;
