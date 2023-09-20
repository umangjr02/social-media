import React from 'react';
import { LeftBioProps } from '@/types';
import UserProfile from '@/common/UserProfile';

const LeftBio: React.FC<LeftBioProps> = ({ userDetails }) => {
  return (
    <div className="bg-gray-100 p-4 text-sm ">
      <div className="flex flex-col text-2xl font-bold mb-4 items-center">
            <UserProfile
              userName=""
              imageWidth={100}
              imageHeight={100}
              profileImage={""}
              userBioDetails={[]}
            />
      <div className='text-black'>
        Umang Rathod
      </div>
      </div>
      {userDetails.map((detail, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold text-gray-800">{detail.label}:</h3>
          <p className="text-gray-700">{detail.value}</p>
        </div>
      ))}
    </div>
  );
}

export default LeftBio;
