import { Box, Title, Text } from '@mantine/core';

const MyFilesPage = () => {
  return (
    <Box p="lg">
      <Title order={1} mb="md">My Files</Title>
      <Text>Access and manage your documents here.</Text>
    </Box>
  );
};

export default MyFilesPage;