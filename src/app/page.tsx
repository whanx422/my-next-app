import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';

import AppSidebar from '@/components/organisms/AppSidebar/AppSidebar';
import DocumentEditor from '@/components/template/DocumentEditor';
import RightPanel from '@/components/organisms/RightPanel/RightPanel';
import TopBar from '@/components/template/TopBar';

import '@mantine/core/styles.css';

const Index = () => {
  return (
    <MantineProvider>
      <ModalsProvider>
        <TooltipProvider>
          <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
            <AppSidebar />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <TopBar />
              <div style={{ display: 'flex', flex: 1 }}>
                <DocumentEditor />
                <RightPanel />
              </div>
            </div>
          </div>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default Index;
