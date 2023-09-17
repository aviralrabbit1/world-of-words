import { useState } from 'react';
import { fetchData } from '../api/fetchRhymes';

export type Rhymes = {
  word: string;
  score: number;
};

export const useGetRhymes = () => {
  const [rhymes, setRhymes] = useState<Rhymes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getRhymes = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setRhymes)
      .then(() => setIsLoading(false));
  };

  return { isLoading, rhymes, getRhymes };
};
