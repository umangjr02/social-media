export interface PhotoPostProps{
  imageUrl: string;
  likes: number;
  dislikes: number;
  comments: string[];
}

export interface VideoPostProps {
    videoUrl: string;
    comments: string[];
    likeCount: number;
    dislikeCount: number;
  }

export interface UserDetail {
    label: string;
    value: string;
  }

export interface LeftBioProps {
    userDetails: UserDetail[];
  }

export interface UserInfoProps {
    username: string;
    bio: string;
  }
  
export const userDetails = [ 
{ label: 'Bio/Description', value: 'This is the user bio or description.' },
{ label: 'Formar Summer Internship at', value: 'India' },
{ label: 'Formar Student mentor at', value: 'Canada' },
{ label: 'Formar Web Coordinator', value: 'ThreeArrow Technology' },
{ label: 'Formar Summer Internship', value: 'Gujarat' },
{ label: 'Formar Studied at', value: 'Uka tarsadiya University' },
{ label: 'Formar Steering Committee Member at', value: 'Self Employeed' },
{ label: 'Workplace/College', value: 'User workplace or college' },
];

export interface LikeDislikeProps {
  initialLikes: number;
  initialDislikes: number;
}

export interface ProfileProps {
  profileImage: string;
  userName: string;
  userBioDetails: { label: string; value: string }[];
  showAddFriendButton?: boolean;
  onAddFriendClick?: () => void;
}

export interface Comment {
  user: string;
  text: string;
}

export interface AddFriendButtonProps {
  onClick: () => void;
}

export interface ProfilePropsWithFriend extends ProfileProps {
  showAddFriendButton?: boolean;
  onAddFriendClick?: () => void;
  onClick?: () => void;
  imageWidth: number;
  imageHeight: number
}