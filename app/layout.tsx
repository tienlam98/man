import './globals.css';
import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair' 
});

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter' 
});

export const metadata: Metadata = {
  title: 'ManlyWisdom | Timeless advice for the modern man',
  description: 'Discover timeless wisdom, practical skills, and thoughtful insights on the journey to becoming a true man.',
};

export const fetchCache = 'default-cache';

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<Record<string, string>>;
}) {
  // Await params to support the new Next.js 15 async APIs
  await params;
  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} font-sans min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}