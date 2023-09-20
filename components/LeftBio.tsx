"use client";

import React from 'react';

import { LeftBioProps } from '@/types';

const LeftBio: React.FC<LeftBioProps> = ({ userDetails }) => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4"></h2>
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
