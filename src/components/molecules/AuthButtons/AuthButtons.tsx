
import { Stack } from '@mantine/core';
import { IconBrandGoogle, IconBrandWindows, IconBrandApple } from '@tabler/icons-react';
import Button from '../../atoms/Button/Button';

interface AuthButtonsProps {
  onSignUpSuccess: (username: string) => void;
  onClose: () => void;
}

const AuthButtons = ({ onSignUpSuccess, onClose }: AuthButtonsProps) => {
  const handleGoogleSignUp = () => {
    onSignUpSuccess('GoogleUser');
    onClose();
  };

  const handleMicrosoftSignUp = () => {
    onSignUpSuccess('MicrosoftUser');
    onClose();
  };

  const handleAppleSignUp = () => {
    onSignUpSuccess('AppleUser');
    onClose();
  };

  return (
    <Stack gap="sm">
      <Button 
        variant="outline" 
        color="dark"
        leftSection={<IconBrandGoogle size={16} />}
        fullWidth
        c="black"
        onClick={handleGoogleSignUp}
      >
        Continue with Google
      </Button>
      
      <Button 
        variant="outline" 
        color="dark"
        leftSection={<IconBrandWindows size={16} />}
        fullWidth
        c="black"
        onClick={handleMicrosoftSignUp}
      >
        Continue with Microsoft
      </Button>
      
      <Button 
        variant="outline" 
        color="dark"
        leftSection={<IconBrandApple size={16} />}
        fullWidth
        c="black"
        onClick={handleAppleSignUp}
      >
        Continue with Apple
      </Button>
    </Stack>
  );
};

export default AuthButtons;