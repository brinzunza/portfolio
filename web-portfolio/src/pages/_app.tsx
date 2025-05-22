import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ReadingProvider } from '../context/ReadingContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReadingProvider>
      <Component {...pageProps} />
    </ReadingProvider>
  );
}

