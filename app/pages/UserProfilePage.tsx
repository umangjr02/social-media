import React from 'react';
import { useRouter } from 'next/router';
import { userData } from '@/components/userData';
import UserProfileDetail from '@/components/UserProfileDetail';


const UserProfilePage: React.FC = () => {
  const router = useRouter();
  const { username } = router.query;

  // Find the user data based on the username
  const user = userData.find((u) => u.name === username);

  if (!user) {
    // Handle the case when the user is not found
    return <div>User not found.</div>;
  }

  return (
    <div>
      <UserProfileDetail
        name={user.name}
        profileImage={user.profileImage}
        userBioDetails={user.userBioDetails}
      />
    </div>
  );
};

export default UserProfilePage;
