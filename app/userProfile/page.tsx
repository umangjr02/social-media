"use client"
import React from "react";
import { ProfilePropsWithFriend, userDetails } from "@/types";
import Image from "next/image";

const UserProfile: React.FC<ProfilePropsWithFriend> = ({
  userName,
  showAddFriendButton,
  onAddFriendClick,
  onClick,
  imageWidth,
  imageHeight,
}) => {
  return (
    <div className="relative overflow-hidden">
      <Image
        src="/cover-image.jpg"
        alt="Cover Image"
        width={1820}
        height={300}
        layout="responsive"
        objectFit="cover"
        className="w-full h-auto"
      />
      <div className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 flex items-center w-full">
        <div className={`w-${imageWidth} h-${imageHeight} rounded-full overflow-hidden`} onClick={onClick}>
          <Image
            src="/user-profile.png"
            alt="User Profile"
            width={100}
            height={100}
            objectFit="cover"
            className="w-full h-full rounded-full"
          />
        </div>
        <div className="ml-2">
          <p className="font-semibold text-white">Umang Rathod</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
