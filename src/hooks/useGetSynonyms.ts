import { useState } from 'react';
import { fetchData } from '../api/fetchSynonyms';

export type Synonym = {
  word: string;
  score: number;
};

export const useGetSynonyms = () => {
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSynonyms = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setSynonyms)
      .then(() => setIsLoading(false));
  };

  return { isLoading, synonyms, getSynonyms };
};
