"use client"
import { useState } from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import AppSidebar from '@/components/organisms/AppSidebar/AppSidebar';
import RightPanel from '@/components/organisms/RightPanel/RightPanel';
import DocumentEditor from '@/components/template/DocumentEditor';
import TopBar from '@/components/template/TopBar';
import TemplateGallery from '@/components/organisms/TemplateGallery/TemplateGallery';
import '@mantine/core/styles.css';

const TemplatesPage = () => {
  const [showTemplateGallery, setShowTemplateGallery] = useState(false);

  const handleExploreTemplates = () => {
    setShowTemplateGallery(true);
  };

  const handleBackToEditor = () => {
    setShowTemplateGallery(false);
  };

  if (showTemplateGallery) {
    return (
      <MantineProvider>
        <ModalsProvider>
          <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
            <AppSidebar />
            <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
              <TemplateGallery onBack={handleBackToEditor} />
            </div>
          </div>
        </ModalsProvider>
      </MantineProvider>
    );
  }

  return (
    <MantineProvider>
      <ModalsProvider>
        <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb', display: 'flex' }}>
          <AppSidebar />
          <div style={{ display: 'flex', flex: 1, flexDirection: 'column' }}>
            <TopBar />
            <div style={{ display: 'flex', flex: 1 }}>
              <DocumentEditor />
              <RightPanel onExploreTemplates={handleExploreTemplates} />
            </div>
          </div>
        </div>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default TemplatesPage;