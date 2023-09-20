"use client";

import React from 'react';
import PhotoPost from './PhotoPost';
import VideoPost from './VideoPost';
import LeftBio from './LeftBio';
import { userDetails } from '@/types';
import RightSide from './RightSide';

const Hero = () => {
  return (
    <div className="bg-gray-200 min-h-screen flex flex-col justify-center items-center w-full">
      <div className="container flex flex-col lg:flex-row w-full max-container-width">
        <div className="lg:w-1/4 p-4 right-left-container">
          {userDetails && userDetails.length > 0 && (
            <LeftBio userDetails={userDetails} />
          )}
        </div>

        <div className="lg:w-1/2 flex bg-white p-4">
          <div className="mb-6 w-full">
            <div className="flex flex-col items-center gap-5">
              <div className="w-full mt-4 lg:mt-0 pl-2">
                <PhotoPost imageUrl={''} likes={0} dislikes={0} comments={[]} initialComments={''} />
              </div>
              <div className="w-full mt-4 lg:mt-0 pl-2">
                <VideoPost videoUrl={''} likes={0} dislikes={0} comments={[]} likeCount={0} dislikeCount={0} initialComments={''} />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/4 p-4 right-left-container">
          <h2 className="text-white text-2xl font-bold mb-4"><RightSide /></h2>
        </div>
      </div>
    </div>
  );
}

export default Hero;
