import ImageComponent from "@/components/ImageComponent";
import React from "react";

interface UserProfileProps {
  coverImageSrc: string;
  profileImageSrc: string;
  userName: string;
}

const UserProfile: React.FC<UserProfileProps> = ({
  coverImageSrc,
  profileImageSrc,
  userName,
}) => {
  return (
    <div>
      <div className="relative w-full pb-1/4">
        <ImageComponent
          src="/cover-image.jpg"
          alt="Cover Image"
          width={1200}
          height={300}
          objectFit="cover"
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>

      <div>
        <div className="relative w-full pb-square">
          <ImageComponent
            src="/user-profile.png"
            alt="Profile Image"
            width={20}
            height={20}
            className="absolute top-0 left-0 w-full h-full rounded-full" objectFit={"cover"}          />
        </div>
        <div>
          <p>{userName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
