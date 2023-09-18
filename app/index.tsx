import React from "react";
import UserInfo from "../components/UserInfo";
import PhotoPost from "../components/PhotoPost";
import VideoPost from "../components/VideoPost";

const Home: React.FC = () => {
  return (
    <div>
      <UserInfo username="YourUsername" bio="Your Bio" />

      <div>
        <h2>Photo Posts</h2>
        <PhotoPost
          imageUrl="https://example.com/photo1.jpg"
          likes={10}
          dislikes={2}
          comments={["Comment 1", "Comment 2"]}
        />
        <PhotoPost
          imageUrl="https://example.com/photo2.jpg"
          likes={8}
          dislikes={1}
          comments={["Comment 3", "Comment 4"]}
        />
      </div>

      <div>
        <h2>Video Posts</h2>
        <VideoPost
          videoUrl="https://example.com/video1.mp4"
          likes={15}
          dislikes={3}
          comments={["Comment 5", "Comment 6"]}
        />
        <VideoPost
          videoUrl="https://example.com/video2.mp4"
          likes={12}
          dislikes={2}
          comments={["Comment 7", "Comment 8"]}
        />
      </div>
    </div>
  );
};

export default Home;
