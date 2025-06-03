import { Box, Title, Text, Group } from '@mantine/core';
import { IconUpload } from '@tabler/icons-react';
import Button from '@/components/atoms/Button/Button';

const UploadDocumentPage = () => {
  const handleFileUpload = () => {
    // TODO: Implement file upload functionality
    console.log('Upload file clicked');
  };

  return (
    <Box p="lg">
      <Title order={1} mb="md">Upload Document</Title>
      <Text mb="lg">Upload your documents to start editing them.</Text>
      
      <Group>
        <Button 
          leftSection={<IconUpload size={16} />}
          onClick={handleFileUpload}
        >
          Choose File to Upload
        </Button>
      </Group>
    </Box>
  );
};

export default UploadDocumentPage;