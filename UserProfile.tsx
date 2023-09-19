"use client";

import React from 'react';
import LeftBio from './LeftBio';
import UserInfo from './UserInfo';

const userBioDetails = [
  { label: 'Bio/Description', value: 'Passionate web developer with a love for coding.' },
  { label: 'Location', value: 'New York City, NY' },
  { label: 'Workplace/College', value: 'Tech University' },
];

const UserProfile = () => {
  return (
    <div className="bg-gray-200 p-4 md:w-1/2 lg:w-1/3 xl:w-1/3 mx-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <UserInfo username="John Doe" bio="Front-end developer with a creative mindset." />
        <LeftBio userDetails={userBioDetails} />
      </div>
      {/* Other content goes here */}
    </div>
  );
}

export default UserProfile;
