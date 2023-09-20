import React from 'react';
import { ProfilePropsWithFriend } from '@/types';
import Image from 'next/image';

const UserProfile: React.FC<ProfilePropsWithFriend> = ({
  userName,
  showAddFriendButton,
  onAddFriendClick,
  onClick,
  imageWidth,
  imageHeight
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className={`w-${imageWidth} h-${imageHeight} rounded-full overflow-hidden`} onClick={onClick}>
        <Image
          src="/user-profile.png"
          alt="User Profile"
          width={imageWidth}
          height={imageHeight}
          className="w-full h-full"
        />
      </div>
      <div className="ml-2">
        <p className="font-semibold text-black">{userName}</p>
      </div>
    </div>
  );
};

export default UserProfile;
