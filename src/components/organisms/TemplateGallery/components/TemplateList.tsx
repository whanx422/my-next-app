import { useState } from 'react';
import { Box, Stack, ScrollArea, Group, TextInput } from '@mantine/core';
import { IconArrowLeft } from '@tabler/icons-react';
import Text from '../../../atoms/Text/Text';
import Button from '../../../atoms/Button/Button';
import { Template } from '../data/templateData';

interface TemplateListProps {
  onBack: () => void;
  selectedTemplate: Template | null;
  onTemplateSelect: (template: Template) => void;
  templates: Template[];
}

const TemplateList = ({ onBack, selectedTemplate, onTemplateSelect, templates }: TemplateListProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter templates by search term (case-insensitive)
  const filteredTemplates = templates.filter(template =>
    template.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Group filtered templates by category
  const groupedTemplates = filteredTemplates.reduce<Record<string, Template[]>>((acc, template) => {
    if (!acc[template.category]) acc[template.category] = [];
    acc[template.category].push(template);
    return acc;
  }, {});

  return (
    <Box style={{ width: 400, borderRight: '1px solid #e5e7eb', backgroundColor: 'white' }}>
      <Box style={{ padding: 16, borderBottom: '1px solid #e5e7eb' }}>
        <Group gap="sm" mb="sm">
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

        {/* Search box below Back button */}
        <TextInput
          placeholder="Search templates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.currentTarget.value)}
          size="sm"
          mt="sm"
          autoComplete="off"
        />
      </Box>

      <ScrollArea style={{ height: 'calc(100vh - 112px)' }}>
        <Box style={{ padding: 16 }}>
          <Stack gap="lg">
            {Object.entries(groupedTemplates).map(([category, categoryTemplates]) => (
              <Box key={category}>
                <Text size="sm" fw={600} mb="sm" c="gray">
                  {category}
                </Text>
                <Stack gap="xs">
                  {categoryTemplates.map((template) => (
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
            ))}

            {/* Show a message if no templates match */}
            {filteredTemplates.length === 0 && (
              <Text
                size="sm"
                c="gray"
                mt="md"
                style={{ textAlign: 'center' }}
                >
                No templates found.
                </Text>
            )}
          </Stack>
        </Box>
      </ScrollArea>
    </Box>
  );
};

export default TemplateList;
