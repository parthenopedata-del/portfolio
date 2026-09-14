import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parthenope Data Advisory',
  description: 'Data, strategy, and AI with business impact.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
