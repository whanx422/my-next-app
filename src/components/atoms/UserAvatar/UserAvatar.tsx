
interface UserAvatarProps {
  username: string;
  onClick?: () => void;
}

const UserAvatar = ({ username, onClick }: UserAvatarProps) => {
  const firstChar = username.charAt(0).toUpperCase();

  return (
    <button
      onClick={onClick}
      className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-medium text-sm hover:bg-gray-800 transition-colors relative group"
      title="Click to sign out"
    >
      {firstChar}
      <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
        Sign out
      </div>
    </button>
  );
};

export default UserAvatar;