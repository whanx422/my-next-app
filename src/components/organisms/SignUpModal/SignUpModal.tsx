
import { Modal, Stack, Text } from '@mantine/core';
import EmailForm from '../../molecules/EmailForm/EmailForm';
import Divider from '../../atoms/Divider/Divider';
import AuthButtons from '../../molecules/AuthButtons/AuthButtons';
import TermsLinks from '../../molecules/TermsLinks/TermsLinks';

interface SignUpModalProps {
  opened: boolean;
  onClose: () => void;
  onSignUpSuccess: (username: string) => void;
}

const SignUpModal = ({ opened, onClose, onSignUpSuccess }: SignUpModalProps) => {
  return (
    <Modal opened={opened} onClose={onClose} title="" centered>
      <Stack gap="lg" p="md">
        <Text 
          size="xl" 
          fw={700} 
          ta="center" 
          style={{ color: 'black', marginBottom: '16px' }}
        >
          Barum
        </Text>
        <EmailForm onSignUpSuccess={onSignUpSuccess} onClose={onClose} />
        <Divider label="OR" />
        <AuthButtons onSignUpSuccess={onSignUpSuccess} onClose={onClose} />
        <TermsLinks />
      </Stack>
    </Modal>
  );
};

export default SignUpModal;