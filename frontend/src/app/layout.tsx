import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReviewAI SaaS",
  description: "AI-Powered Google Reviews Generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
