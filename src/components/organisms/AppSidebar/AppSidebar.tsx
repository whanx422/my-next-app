// src/components/organisms/AppSidebar/AppSidebar.tsx
"use client";

import { Stack, Paper } from '@mantine/core';
import { useRouter, usePathname } from 'next/navigation';
import { IconFileText, IconUsers, IconFolder, IconCreditCard, IconSettings } from '@tabler/icons-react';
import SidebarItem from '../../molecules/SidebarItem/SidebarItem';

const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { 
      icon: IconFileText, 
      label: 'Document Editor', 
      href: '/',
      active: pathname?.startsWith('/documentEditor') ?? false
    },
    { 
      icon: IconUsers, 
      label: 'Engagements', 
      href: '/engagements',
      active: pathname === '/engagements' 
    },
    { 
      icon: IconFolder, 
      label: 'My Files', 
      href: '/files',
      active: pathname === '/files' 
    }
  ];

  const bottomItems = [
    { 
      icon: IconCreditCard, 
      label: 'Free Plan',
      href: '/billing',
      active: pathname === '/billing'
    },
    { 
      icon: IconSettings, 
      label: 'Settings',
      href: '/settings',
      active: pathname === '/settings'
    }
  ];

  const handleNavigation = (href: string) => {
    router.push(href);
  };

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
      {/* Barum Header */}
      <div style={{ 
        fontSize: '24px', 
        fontWeight: 'bold', 
        marginBottom: '24px',
        padding: '8px 0',
        color: 'black'
      }}>
        Barum
      </div>

      {/* Main Navigation */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
            onClick={() => handleNavigation(item.href)}
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
            active={item.active}
            onClick={() => handleNavigation(item.href)}
          />
        ))}
      </div>
    </Paper>
  );
};

export default AppSidebar;