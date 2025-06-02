"use client"

import { useState } from 'react';
import { Group, Paper } from '@mantine/core';
import Button from '../atoms/Button/Button';
import SignUpModal from '../organisms/SignUpModal/SignUpModal';
import UserAvatar from '../atoms/UserAvatar/UserAvatar';
import { toast } from '@/hooks/use-toast';

const TopBar = () => {
  const [signUpOpened, setSignUpOpened] = useState(false);
  const [user, setUser] = useState<string | null>(null);

  const handleSignUpClick = () => {
    setSignUpOpened(true);
  };

  const handleSignUpSuccess = (username: string) => {
    console.log('handleSignUpSuccess called with username:', username);
    setUser(username);
    
    console.log('About to show toast notification');
    toast({
      title: "Sign up successful!",
      description: `Welcome ${username}! You have successfully signed up.`,
      duration: 3000,
    });
    console.log('Toast notification should have been shown');
  };

  const handleSignOut = () => {
    setUser(null);
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
      duration: 3000,
    });
  };

  return (
    <>
      <Paper
        style={{
          width: '100%',
          borderBottom: '1px solid #e5e7eb',
          padding: '16px 32px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Group gap="sm">
          {user ? (
            <UserAvatar username={user} onClick={handleSignOut} />
          ) : (
            <>
              <Button variant="filled" color="dark" radius="xl">
                Login
              </Button>
              <div onClick={handleSignUpClick}>
                <Button 
                  variant="outline" 
                  radius="xl"
                  color="dark"
                  c="black"
                >
                  Sign Up
                </Button>
              </div>
            </>
          )}
        </Group>
      </Paper>

      <SignUpModal 
        opened={signUpOpened} 
        onClose={() => setSignUpOpened(false)}
        onSignUpSuccess={handleSignUpSuccess}
      />
    </>
  );
};

export default TopBar;