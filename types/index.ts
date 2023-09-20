export interface PhotoPostProps{
  imageUrl: string;
  likes: number;
  dislikes: number;
  comments: string[];
  initialComments: string;
}

export interface VideoPostProps {
    videoUrl: string;
    likes: number;
    dislikes: number;
    comments: string[];
    likeCount: number;
    dislikeCount: number;
    initialComments: string;
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
{ label: 'Formar Summer Internship at', value: 'User location' },
{ label: 'Formar Student mentor at', value: 'User location' },
{ label: 'Formar Web Coordinator', value: 'User location' },
{ label: 'Formar Summer Internship', value: 'User location' },
{ label: 'Formar Studied at', value: 'User location' },
{ label: 'Formar Steering Committee Member at', value: 'User location' },
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