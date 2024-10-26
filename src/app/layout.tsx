import React from 'react';
import './globals.css';
// import { Providers } from './providers';
import { Nunito } from 'next/font/google';
import { Metadata } from 'next';
import { Header } from '@/components/shared';

const nunito = Nunito({
  subsets: ['cyrillic'],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FoodieFly',
  description: 'Best food delivery',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={nunito.variable} lang="en">
      <head>
        <link data-rh="true" rel="icon" href="/logo.png" />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>

        {/*<Providers></Providers>*/}
      </body>
    </html>
  );
}
