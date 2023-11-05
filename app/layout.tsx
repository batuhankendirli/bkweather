import type { Metadata } from 'next';
import { Poppins, Inter_Tight } from 'next/font/google';
import { ContextProvider } from './Context';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
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
  title: 'Türkiye Hava Durumu | Batuhan Kendirli',
  description:
    "Ankara, İstanbul, Antalya ve daha fazlası! Türkiye'nin her şehrinin hava durumu anında burada. Günlük tahminler, sıcaklık, nem ve daha fazlası. Hava durumunu takip etmek hiç bu kadar kolay olmamıştı.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${inter.variable} bg-color-primary`}>
        <ContextProvider>
          <SkeletonTheme baseColor="#222222" highlightColor="#292929">
            <div className="flex flex-col justify-between bg-color-secondary p-4 min-h-screen overflow-x-hidden xl:rounded-[2rem] xl:my-[4vw] sm:max-w-[80rem] sm:mx-auto sm:p-12">
              {children}
              <Footer />
            </div>
          </SkeletonTheme>
        </ContextProvider>
      </body>
    </html>
  );
}
