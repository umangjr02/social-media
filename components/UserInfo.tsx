import React from "react";

interface UserInfoProps {
  username: string;
  bio: string;
}

const UserInfo: React.FC<UserInfoProps> = ({ username, bio }) => {
  return (
    <div>
      <h1>{username}</h1>
      <p>{bio}</p>
    </div>
  );
};

export default UserInfo;
