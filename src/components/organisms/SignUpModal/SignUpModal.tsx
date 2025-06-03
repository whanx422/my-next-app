
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 5,
            gap: 3
          }}
        >
          <img
            src="/barum.png"
            alt="Barum Logo"
            style={{
              height: 48, // or any size you want
              width: 48,
              objectFit: 'contain',
            }}
          />
          <span
            style={{
              fontSize: '32px',
              fontWeight: 700,
              color: 'black',
            }}
          >
            arum
          </span>
        </div>
        <EmailForm onSignUpSuccess={onSignUpSuccess} onClose={onClose} />
        <Divider label="OR" />
        <AuthButtons onSignUpSuccess={onSignUpSuccess} onClose={onClose} />
        <TermsLinks />
      </Stack>
    </Modal>
  );
};

export default SignUpModal;