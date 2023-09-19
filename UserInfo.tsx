"use client"

import { UserInfoProps } from "@/types";
import React from "react";


const UserInfo: React.FC<UserInfoProps> = ({ username, bio }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 md:w-1/2 lg:w-1/3 mx-auto">
      <h1 className="text-xl font-semibold mb-2">{username}</h1>
      <p className="text-gray-600">{bio}</p>
    </div>
  );
};

export default UserInfo;
