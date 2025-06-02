
import { Button as MantineButton, ButtonProps } from '@mantine/core';

interface CustomButtonProps extends ButtonProps {
  onClick?: () => void;
}

const Button = ({ children, ...props }: CustomButtonProps) => {
  return (
    <MantineButton {...props}>
      {children}
    </MantineButton>
  );
};

export default Button;