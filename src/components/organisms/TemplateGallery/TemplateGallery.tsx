import { useState } from 'react';
import { Box } from '@mantine/core';
import TemplateList from './components/TemplateList';
import TemplatePreview from './components/TemplatePreview';
import { Template, getAllTemplates } from './data/templateData';

interface TemplateGalleryProps {
  onBack: () => void;
}

const TemplateGallery = ({ onBack }: TemplateGalleryProps) => {
  const templates = getAllTemplates();
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(templates[0]);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
  };

  return (
    <Box style={{ display: 'flex', height: '100vh' }}>
      <TemplateList 
        onBack={onBack} 
        selectedTemplate={selectedTemplate}
        onTemplateSelect={handleTemplateSelect}
        templates={templates} // Make sure TemplateList can receive this
      />
      <TemplatePreview selectedTemplate={selectedTemplate} />
    </Box>
  );
};

export default TemplateGallery;
