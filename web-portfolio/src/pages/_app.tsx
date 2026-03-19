import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReadingProvider } from '../context/ReadingContext';
import Layout from '../components/Layout';
import { projects } from './projects';

export default function App({ Component, pageProps }: AppProps) {
  // Prepare projects data for sidebar
  const projectsData = projects.map(p => ({ id: p.id, title: p.title }));

  return (
    <ReadingProvider>
      <Layout projects={projectsData}>
        <Component {...pageProps} />
      </Layout>
    </ReadingProvider>
  );
}

