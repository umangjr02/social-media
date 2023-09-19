// // RightSideComponent.tsx
// import React from 'react';
// import UserProfile from './UserProfile';

// const userData = [
//   {
//     id: 1,
//     profileImage: '/user1.jpg',
//     userName: 'User 1',
//   },
//   {
//     id: 2,
//     profileImage: '/user2.jpg',
//     userName: 'User 2',
//   },
//   {
//     id: 3,
//     profileImage: '/user3.jpg',
//     userName: 'User 3',
//   },
//   // Add more user data as needed
// ];

// const RightSide: React.FC = () => {
//   const handleAddFriendClick = (userId: number) => {
//     // Handle adding a friend based on the user's ID
//     // You can implement your logic for sending friend requests
//     console.log(`Friend request sent for user with ID ${userId}`);
//   };

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {userData.map((user) => (
//         <UserProfile
//           key={user.id}
//           profileImage={user.profileImage}
//           userName={user.userName}
//           onAddFriendClick={() => handleAddFriendClick(user.id)} userBioDetails={[]}        />
//       ))}
//     </div>
//   );
// };

// export default RightSide;
