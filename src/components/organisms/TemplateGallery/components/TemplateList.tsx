
import { Box, Stack, ScrollArea, Group } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Text from '../../../atoms/Text/Text';
import Button from '../../../atoms/Button/Button';
import { Template, startupTemplates, realEstateTemplates } from '../data/templateData';

interface TemplateListProps {
  onBack: () => void;
  selectedTemplate: Template | null;
  onTemplateSelect: (template: Template) => void;
}

const TemplateList = ({ onBack, selectedTemplate, onTemplateSelect }: TemplateListProps) => {
  return (
    <Box style={{ width: 400, borderRight: '1px solid #e5e7eb', backgroundColor: 'white' }}>
      <Box style={{ padding: 16, borderBottom: '1px solid #e5e7eb' }}>
        <Group gap="sm" mb="md">
          <Button
            variant="subtle"
            size="sm"
            onClick={onBack}
            leftSection={<IconArrowLeft size={16} />}
            c="gray"
          >
            Template Gallery
          </Button>
        </Group>
      </Box>

      <ScrollArea style={{ height: 'calc(100vh - 80px)' }}>
        <Box style={{ padding: 16 }}>
          <Stack gap="lg">
            <Box>
              <Text size="sm" fw={600} mb="sm" c="gray">
                Startup legal templates
              </Text>
              <Stack gap="xs">
                {startupTemplates.map((template) => (
                  <Button
                    key={template.id}
                    variant={selectedTemplate?.id === template.id ? "filled" : "subtle"}
                    color={selectedTemplate?.id === template.id ? "dark" : "gray"}
                    justify="flex-start"
                    fullWidth
                    size="sm"
                    c={selectedTemplate?.id === template.id ? "white" : "black"}
                    style={{
                      backgroundColor: selectedTemplate?.id === template.id ? '#1a1a1a' : 'transparent',
                      fontWeight: selectedTemplate?.id === template.id ? 500 : 400
                    }}
                    onClick={() => onTemplateSelect(template)}
                  >
                    {template.name}
                  </Button>
                ))}
              </Stack>
            </Box>

            <Box>
              <Text size="sm" fw={600} mb="sm" c="gray">
                Real estate legal template
              </Text>
              <Stack gap="xs">
                {realEstateTemplates.map((template) => (
                  <Button
                    key={template.id}
                    variant={selectedTemplate?.id === template.id ? "filled" : "subtle"}
                    color={selectedTemplate?.id === template.id ? "dark" : "gray"}
                    justify="flex-start"
                    fullWidth
                    size="sm"
                    c={selectedTemplate?.id === template.id ? "white" : "black"}
                    style={{
                      backgroundColor: selectedTemplate?.id === template.id ? '#1a1a1a' : 'transparent',
                      fontWeight: selectedTemplate?.id === template.id ? 500 : 400
                    }}
                    onClick={() => onTemplateSelect(template)}
                  >
                    {template.name}
                  </Button>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default TemplateList;