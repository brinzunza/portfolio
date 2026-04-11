import { createContext, useContext, useState, ReactNode } from 'react';

interface ReadingContextType {
  isReading: boolean;
  setIsReading: (value: boolean) => void;
}

const ReadingContext = createContext<ReadingContextType | undefined>(undefined);

export function ReadingProvider({ children }: { children: ReactNode }) {
  const [isReading, setIsReading] = useState(false);

  return (
    <ReadingContext.Provider value={{ isReading, setIsReading }}>
      {children}
    </ReadingContext.Provider>
  );
}

export function useReading() {
  const context = useContext(ReadingContext);
  if (context === undefined) {
    throw new Error('useReading must be used within a ReadingProvider');
  }
  return context;
} 