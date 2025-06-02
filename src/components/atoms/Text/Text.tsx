
import { Text as MantineText, TextProps } from '@mantine/core';

interface CustomTextProps extends TextProps {
  children: React.ReactNode;
}

const Text = ({ children, ...props }: CustomTextProps) => {
  return (
    <MantineText {...props}>
      {children}
    </MantineText>
  );
};

export default Text;