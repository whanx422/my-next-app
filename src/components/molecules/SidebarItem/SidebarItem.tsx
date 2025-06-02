import { TablerIcon } from '@tabler/icons-react';

interface SidebarItemProps {
  icon: TablerIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const SidebarItem = ({ icon: Icon, label, active = false, onClick }: SidebarItemProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg 
        transition-all duration-200 ease-in-out
        ${active 
          ? 'bg-black text-white' 
          : 'text-black bg-transparent hover:bg-black hover:text-white'
        }
      `}
    >
      <Icon size={16} className="mr-3" />
      {label}
    </button>
  );
};

export default SidebarItem;