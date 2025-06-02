
import { TextInput, TextInputProps } from '@mantine/core';

interface CustomInputProps extends TextInputProps {
}

const Input = ({ ...props }: CustomInputProps) => {
  return <TextInput {...props} />;
};

export default Input;