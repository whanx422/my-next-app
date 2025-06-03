"use client";

import AppSidebar from '@/components/organisms/AppSidebar/AppSidebar';
import TopBar from '@/components/template/TopBar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
      <AppSidebar />
      <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
        <TopBar />
        <main style={{ flex: 1, display: 'flex' }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default AppLayout;