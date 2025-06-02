
import { Text, Anchor, Group } from '@mantine/core';

const TermsLinks = () => {
  return (
    <Text size="xs" c="dimmed" ta="center">
      By signing up, you agree to our{' '}
      <Anchor href="#" size="xs">
        Terms and Conditions
      </Anchor>{' '}
      and{' '}
      <Anchor href="#" size="xs">
        Privacy Policy
      </Anchor>
    </Text>
  );
};

export default TermsLinks;