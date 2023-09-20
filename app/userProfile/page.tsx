"use client";

import React, { useEffect, useState } from "react";
import { ProfilePropsWithFriend } from "@/types";
import Image from "next/image";

const UserProfile: React.FC<ProfilePropsWithFriend> = ({
  userName,
  showAddFriendButton,
  onAddFriendClick,
  onClick,
  imageWidth,
  imageHeight,
}) => {
  const [coverStyle, setCoverStyle] = useState<React.CSSProperties>({});

  useEffect(() => {
    const parentContainer = document.getElementById("parent-container");
    if (parentContainer) {
      const parentHeight = parentContainer.clientHeight;
      setCoverStyle({
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        objectFit: "cover",
      });
    }
  }, []);

  return (
    <div
      id="parent-container"
      className="relative overflow-hidden"
      style={{ height: "300px", maxWidth: "100%" }}
    >
      <Image
        src="/cover-image.jpg"
        alt="Cover Image"
        objectFit="cover"
        width={1820}
        height={300}
        style={coverStyle}
      />
      <div
        className="absolute bottom-0 left-0 p-4 bg-black bg-opacity-50 flex items-center"
        style={{
          width: "100%",
          position: "absolute",
          bottom: "-10px",
          left: "50px",
          zIndex: "999"
        }}
      >
        <div
          className={`w-${imageWidth} h-${imageHeight} rounded-full overflow-hidden`}
          onClick={onClick}
          style={{ zIndex: 999 }}
        >
          <Image
            src="/user-profile.png"
            alt="User Profile"
            width={100}
            height={100}
            className="overflow-hidden"
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
