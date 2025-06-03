import { Paper } from '@mantine/core';
import { IconFileText, IconUsers, IconFolder, IconCreditCard, IconSettings } from '@tabler/icons-react';
import SidebarItem from '../../molecules/SidebarItem/SidebarItem';

// If using a bundler that supports import of images, you can do:
// import BIcon from '../../assets/b-icon.png';

const AppSidebar = () => {
  const menuItems = [
    { icon: IconFileText, label: 'Document Editor', active: true },
    { icon: IconUsers, label: 'Engagements', active: false },
    { icon: IconFolder, label: 'My Files', active: false }
  ];

  const bottomItems = [
    { icon: IconCreditCard, label: 'Free Plan' },
    { icon: IconSettings, label: 'Settings' }
  ];

  return (
    <Paper
      style={{
        width: 288,
        height: '100vh',
        borderRight: '1px solid #e5e7eb',
        display: 'flex',
        flexDirection: 'column',
      }}
      p="md"
    >
      {/* Barum Header with PNG icon */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        marginBottom: '24px',
        padding: '8px 0',
        color: 'black',
        fontWeight: 'bold',
        fontSize: '24px',
        gap: 3,
      }}>
        {/* PNG Icon */}
        <img 
          src="/barum.png" 
          alt="B icon" 
          style={{ 
            width: 35, 
            height: 35, 
            objectFit: 'contain',
            userSelect: 'none',
          }} 
        />
        {/* The rest of the text */}
        <span>arum</span>
      </div>

      {/* Main Navigation */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </div>

      {/* Bottom Items */}
      <div style={{ borderTop: '1px solid #e5e7eb', paddingTop: 16, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {bottomItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </Paper>
  );
};

export default AppSidebar;
