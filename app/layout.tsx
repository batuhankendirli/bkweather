import type { Metadata } from 'next';
import { Poppins, Inter_Tight } from 'next/font/google';
import { ContextProvider } from './Context';
import './globals.css';
import Footer from './components/Footer';

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

const inter = Inter_Tight({
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.variable} bg-color-primary`}>
        <ContextProvider>
          <div className="flex flex-col justify-between bg-color-secondary p-8 min-h-screen xl:rounded-[2rem] xl:my-[4vw] sm:max-w-[80rem] sm:mx-auto sm:p-12">
            {children}
            <Footer />
          </div>
        </ContextProvider>
      </body>
    </html>
  );
}
