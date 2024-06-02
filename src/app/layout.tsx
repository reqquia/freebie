import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../styles/globals.css';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Freebie - Dashboard',
  description: 'Dashboard - Freebie com Next.js e Tailwind',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
        <main className='flex'>
          <Sidebar />
          <div className='flex-1'>
            <Navbar />
            <main className='p-4'>{children}</main>
          </div>
        </main>
      </body>
    </html>
  );
}
