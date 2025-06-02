
import { useState } from 'react';
import { Stack } from '@mantine/core';
import Input from '../../atoms/Input/Input';
import Button from '../../atoms/Button/Button';

interface EmailFormProps {
  onSignUpSuccess: (username: string) => void;
  onClose: () => void;
}

const EmailForm = ({ onSignUpSuccess, onClose }: EmailFormProps) => {
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    // Simulate successful sign up
    const username = email.split('@')[0] || 'User';
    onSignUpSuccess(username);
    onClose();
  };

  return (
    <Stack gap="md">
      <Input
        label="Create an account"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      
      <Button color="dark" fullWidth onClick={handleContinue}>
        Continue
      </Button>
    </Stack>
  );
};

export default EmailForm;