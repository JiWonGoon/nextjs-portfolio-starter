'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from './navbar';
import Footer from './footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
