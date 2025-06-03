
import { Box, Paper, Stack, Group, ActionIcon } from '@mantine/core';
import { IconSearch, IconUpload, IconTemplate } from '@tabler/icons-react';
import Text from '../../atoms/Text/Text';
import Button from '../../atoms/Button/Button';

interface RightPanelProps {
  onExploreTemplates: () => void;
}

const RightPanel = ({ onExploreTemplates }: RightPanelProps) => {
  const frequentlyDraftedItems = [
    { label: 'NDA', type: 'document' },
    { label: 'MOU', type: 'document' },
    { label: 'LOI', type: 'document' }
  ];

  return (
    <Box style={{ width: 300, padding: 16, borderLeft: '1px solid #e5e7eb' }}>
      <Group justify="space-between" mb="md">
        <ActionIcon variant="subtle" size="lg">
          <IconSearch size={20} />
        </ActionIcon>
      </Group>

      <Stack gap="lg">
        <Box>
          <Text fw={600} mb="sm" c="black">Continue Editing</Text>
          <Text size="sm" c="dimmed">No recent documents</Text>
        </Box>

        <Box>
          <Text fw={600} mb="sm" c="black">Create Document</Text>
          <Stack gap="xs">
            <Button 
              variant="subtle" 
              leftSection={<IconUpload size={16} />}
              justify="flex-start"
              fullWidth
              c="black"
            >
              Upload document
            </Button>
            <Button 
              variant="subtle" 
              leftSection={<IconTemplate size={16} />}
              justify="flex-start"
              fullWidth
              c="black"
              onClick={onExploreTemplates}
            >
              Explore templates
            </Button>
          </Stack>
        </Box>

        <Box>
          <Text fw={600} mb="sm" c="black">Frequently Drafted</Text>
          <Stack gap="xs">
            {frequentlyDraftedItems.map((item, index) => (
              <Button 
                key={index}
                variant="subtle" 
                justify="flex-start" 
                fullWidth
                c="black"
              >
                + {item.label}
              </Button>
            ))}
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RightPanel;