import type {Metadata} from 'next';
import { Inter, JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import { KaranAI } from '@/components/karan-ai';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Karan Pareek | Programmer',
  description: 'Personal portfolio for Karan Pareek, Programmer and Co-Founder.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} dark`}>
      <body suppressHydrationWarning className="bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        {children}
        <KaranAI />
      </body>
    </html>
  );
}
