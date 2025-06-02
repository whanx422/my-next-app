
import { Divider as MantineDivider, DividerProps, Text } from '@mantine/core';

interface CustomDividerProps extends DividerProps {
  label?: string;
}

const Divider = ({ label, ...props }: CustomDividerProps) => {
  return (
    <MantineDivider 
      label={label && <Text size="xs" c="dimmed">{label}</Text>} 
      labelPosition="center" 
      {...props} 
    />
  );
};

export default Divider;