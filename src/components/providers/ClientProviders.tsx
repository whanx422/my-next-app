"use client";

import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import '@mantine/core/styles.css';
import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Toaster } from '../ui/toaster';
import { Toaster as Sonner } from '../ui/sonner';

interface ClientProvidersProps {
  children: React.ReactNode;
}

const ClientProviders = ({ children }: ClientProvidersProps) => {
  return (
    <MantineProvider>
      <ModalsProvider>
         <TooltipProvider>
        {children}
        <Toaster />
          <Sonner />
        </TooltipProvider>
      </ModalsProvider>
    </MantineProvider>
  );
};

export default ClientProviders;