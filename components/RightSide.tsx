import React from 'react';
import { UserProfile, AddFriendButton } from '.';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicRightSide = dynamic(() => import('../components/RightSide'), {
  ssr: false,
});

const friendData = [
  {
    id: 1,
    name: 'Friend 1',
    profileImage: '/user-profile.png',
  },
  {
    id: 2,
    name: 'Friend 2',
    profileImage: '/user-profile.png',
  },
  {
    id: 3,
    name: 'Friend 3',
    profileImage: '/user-profile.png',
  },
  {
    id: 4,
    name: 'Friend4 ',
    profileImage: '/user-profile.png',
  },
  {
    id: 5,
    name: 'Friend5 ',
    profileImage: '/user-profile.png',
  },
  {
    id: 6,
    name: 'Friend6 ',
    profileImage: '/user-profile.png',
  },
  {
    id: 7,
    name: 'Friend7 ',
    profileImage: '/user-profile.png',
  },
  {
    id: 8,
    name: 'Friend8 ',
    profileImage: '/user-profile.png',
  },
  {
    id: 9,
    name: 'Friend9 ',
    profileImage: '/user-profile.png',
  },
];

const RightSide: React.FC = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Friends List</h2>
      <div className="flex flex-col gap-4">
        {friendData.map((friend) => (
          <div
            key={friend.id}
            className="hover:bg-white hover:shadow-md hover:scale-105 text-sm transform transition duration-300 ease-in-out rounded-lg p-4 block"
          >
            <Link href={`/userProfile`}>
              <div>
                <div className="flex items-center">
                  <UserProfile
                    userName={friend.name}
                    profileImage={friend.profileImage}
                    userBioDetails={[]}
                  />
                </div>
              </div>
            </Link>

            <div className="flex justify-between">
              <div className="flex items-center">
                <AddFriendButton onClick={() => {}} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RightSide;
