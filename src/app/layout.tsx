import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TheBytePlay - Coming Soon',
  description: 'Something amazing is coming. Be the first to know when we launch.',
  keywords: 'TheBytePlay, coming soon, web development, digital experience',
  authors: [{ name: 'TheBytePlay Team' }],
  creator: 'TheBytePlay',
  publisher: 'TheBytePlay',
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://thebyteplay.com',
    title: 'TheBytePlay - Coming Soon',
    description: 'Something amazing is coming. Be the first to know when we launch.',
    siteName: 'TheBytePlay',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TheBytePlay - Coming Soon',
    description: 'Something amazing is coming. Be the first to know when we launch.',
    creator: '@thebyteplay',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#22c55e" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
