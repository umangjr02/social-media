"use client";
import React from "react";
import { ProfilePropsWithFriend, userDetails } from "@/types";
import Image from "next/image";
import { LeftBio } from "@/components";

const UserProfile: React.FC<ProfilePropsWithFriend> = ({
  userName,
  showAddFriendButton,
  onAddFriendClick,
  onClick,
}) => {
  return (
    <div className="max-w-screen-xl mx-auto w-full h-auto overflow-hidden relative">
      <div className="relative top-0 left-0" style={{ width: "100%", paddingTop: "56.25%" }}>
        <Image
          src="/cover-image.jpg"
          alt="Cover Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute left-0 p-4 bg-black bg-opacity-50 flex items-center w-full" style={{ top: '47%', width: '100%' }}>
        <div className="rounded-full overflow-hidden" onClick={onClick}>
          <Image
            src="/user-profile.png"
            alt="User Profile"
            width={100}
            height={100}
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="ml-2">
          <p className="font-semibold text-white">{userName}</p>
        </div>
      </div>
      {userDetails.map((detail, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-white-100">{detail.label}:</h3>
          <p className="text-gray-700">{detail.value}</p>
        </div>
      ))}

      <style jsx>{`
      @media (max-width: 1267px) {
        .absolute {
          top: 45% !important;
        }
        .font-semibold {
          font-size: 1.5rem;
        }
      }
      @media (max-width: 1154px) {
        .absolute {
          top: 42% !important;
        }
        .font-semibold {
          font-size: 1.4rem;
        }
      }
      @media (max-width: 1074px) {
        .absolute {
          top: 40% !important;
        }
        .font-semibold {
          font-size: 1.3rem;
        }
      }
      @media (max-width: 890px) {
        .absolute {
          top: 34% !important;
        }
        .font-semibold {
          font-size: 1.2rem;
        }
      }
        @media (max-width: 768px) {
          .absolute {
            top: 30% !important;
          }
          .font-semibold {
            font-size: 1.1rem;
          }
        }
        @media (max-width: 425px) {
          .absolute {
            top: 14% !important;
          }
          .font-semibold {
            font-size: 1rem;
          }
        }
        @media (max-width: 376px) {
          .absolute {
            top: 7% !important;
          }
          .font-semibold {
            font-size: .9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default UserProfile;
