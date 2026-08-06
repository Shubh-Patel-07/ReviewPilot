import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ReviewAI — Premium Google Review SaaS',
  description: 'Supercharge your Google Reviews with AI-driven QR codes and intelligent review drafting.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#0F172A] text-slate-100 antialiased selection:bg-blue-600 selection:text-white font-['Inter',sans-serif]">
        {children}
      </body>
    </html>
  );
}
