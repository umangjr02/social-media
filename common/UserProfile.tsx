"use client";

import React from "react";
import Image from "next/image";
import { ProfileProps } from "@/types";

interface ProfilePropsWithFriend extends ProfileProps {
  showAddFriendButton?: boolean;
  onAddFriendClick?: () => void;
}

const UserProfile: React.FC<ProfilePropsWithFriend> = ({
  userName,
  showAddFriendButton,
  onAddFriendClick,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 rounded-full overflow-hidden">
        <Image
          src="/user-profile.png"
          alt="User Profile"
          width={20}
          height={20}
          className="w-full h-full"
        />
      </div>
      <div className="ml-2">
        <p className="font-semibold text-black">{userName}</p>
        {/* {showAddFriendButton && (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded mt-1"
            onClick={onAddFriendClick}
          >
            Add Friend
          </button>
        )} */}
      </div>
    </div>
  );
};

export default UserProfile;
