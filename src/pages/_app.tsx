import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ReadingProvider } from '../context/ReadingContext';
import { LanguageProvider } from '../context/LanguageContext';
import Layout from '../components/Layout';
import { projects } from './projects';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  // Prepare projects data for sidebar
  const projectsData = projects.map(p => ({ id: p.id, title: p.title }));

  return (
    <div className={`${inter.variable} ${jetbrainsMono.variable} font-sans`}>
      <LanguageProvider>
        <ReadingProvider>
          <Layout projects={projectsData}>
            <Component {...pageProps} />
          </Layout>
        </ReadingProvider>
      </LanguageProvider>
    </div>
  );
}

