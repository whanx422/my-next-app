import type { Metadata } from 'next'
import ClientProviders from '@/components/providers/ClientProviders'
import AppLayout from '@/components/layout/AppLayout'
import './globals.css'

export const metadata: Metadata = {
  title: 'Document Editor',
  description: 'Modern document editing application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          <AppLayout>
            {children}
          </AppLayout>
        </ClientProviders>
      </body>
    </html>
  )
}
