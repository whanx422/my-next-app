
import { useState } from 'react';
import { Box } from '@mantine/core';
import TemplateList from './components/TemplateList';
import TemplatePreview from './components/TemplatePreview';
import { Template, startupTemplates } from './data/templateData';

interface TemplateGalleryProps {
  onBack: () => void;
}

const TemplateGallery = ({ onBack }: TemplateGalleryProps) => {
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(startupTemplates[0]);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  return (
    <Box style={{ display: 'flex', height: '100vh' }}>
      <TemplateList 
        onBack={onBack} 
        selectedTemplate={selectedTemplate}
        onTemplateSelect={handleTemplateSelect}
      />
      <TemplatePreview selectedTemplate={selectedTemplate} />
    </Box>
  );
};

export default TemplateGallery;