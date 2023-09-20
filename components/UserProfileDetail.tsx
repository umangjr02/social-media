import React from 'react';

interface UserProfileDetailProps {
  name: string;
  profileImage: string;
  userBioDetails: string[];
}

const UserProfileDetail: React.FC<UserProfileDetailProps> = ({ name, profileImage, userBioDetails }) => {
  return (
    <div>
      <h2>{name}</h2>
      <img src={profileImage} alt={`Profile of ${name}`} />
      <ul>
        {userBioDetails.map((detail, index) => (
          <li key={index}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserProfileDetail;
