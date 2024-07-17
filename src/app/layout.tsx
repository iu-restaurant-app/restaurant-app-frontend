import type { Metadata } from 'next';
import './globals.css';
import React from 'react';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'Pasta Palace',
  description:
    'Italian restaurant with the best assortment of tasty pasta and pizza',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-right" reverseOrder={false} />
        {children}
      </body>
    </html>
  );
}
