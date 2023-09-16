import { useState } from 'react';
import { fetchData } from '../api/fetchAntonyms';

export type Antonym = {
  word: string;
  score: number;
};

export const useGetAntonyms = () => {
  const [antonyms, setAntonyms] = useState<Antonym[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAntonyms = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setAntonyms)
      .then(() => setIsLoading(false));
  };

  return { isLoading, antonyms, getAntonyms };
};
