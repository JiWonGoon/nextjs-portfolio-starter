'use client';

import { ThemeProvider } from 'next-themes';
import Navbar from './navbar';
import Footer from './footer';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Navbar />
      <main className="flex-1 w-full flex justify-center">
        <div className="w-full max-w-4xl px-4 py-8">
          {children}
        </div>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
