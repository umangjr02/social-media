import React from "react";

interface VideoPostProps {
  videoUrl: string;
  likes: number;
  dislikes: number;
  comments: string[];
}

const VideoPost: React.FC<VideoPostProps> = ({ videoUrl, likes, dislikes, comments }) => {
  return (
    <div>
      <video src={videoUrl} controls></video>
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

export default VideoPost;
