import React, { useState } from "react";
import { AddFriendButtonProps } from "@/types";

const AddFriendButton: React.FC<AddFriendButtonProps> = ({ onClick }) => {
  const [friendAdded, setFriendAdded] = useState(false);

  const handleAddFriendClick = () => {
    setFriendAdded(true);
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 text-black font-bold py-1 px-2 rounded mt-1 ${
        friendAdded ? "bg-gray-300 cursor-not-allowed" : ""
      }`}
      onClick={handleAddFriendClick}
      disabled={friendAdded}
    >
      {friendAdded ? "Added" : "Add Friend"}
    </button>
  );
};

export default AddFriendButton;
