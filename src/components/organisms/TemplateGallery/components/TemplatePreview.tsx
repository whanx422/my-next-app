
import { Box, Paper, Group } from '@mantine/core';
import Text from '../../../atoms/Text/Text';
import Button from '../../../atoms/Button/Button';
import { Template } from '../data/templateData';

interface TemplatePreviewProps {
  selectedTemplate: Template | null;
}

const TemplatePreview = ({ selectedTemplate }: TemplatePreviewProps) => {
  if (!selectedTemplate) {
    return (
      <Box style={{ flex: 1, backgroundColor: '#f9fafb', padding: 32, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Text size="lg" c="gray">
          Select a template to view its preview
        </Text>
      </Box>
    );
  }

  return (
    <Box style={{ flex: 1, backgroundColor: '#f9fafb', padding: 32, overflow: 'auto' }}>
      <Paper
        style={{
          maxWidth: 800,
          margin: '0 auto',
          padding: 40,
          borderRadius: 8,
          border: '1px solid #e5e7eb'
        }}
        shadow="sm"
      >
        <Text size="xl" fw={600} mb="xl" style={{ textAlign: 'center' }}>
          {selectedTemplate.name}
        </Text>

        <Text size="md" style={{ lineHeight: 1.6, marginBottom: 32 }}>
          {selectedTemplate.content}
        </Text>

        <Group justify="flex-end" mt="xl">
          <Button variant="filled" color="dark" size="md">
            Start from this template
          </Button>
        </Group>
      </Paper>
    </Box>
  );
};

export default TemplatePreview;