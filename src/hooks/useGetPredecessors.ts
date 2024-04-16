import { useState } from 'react';
import { fetchData } from '../api/fetchPredecessors';

export type Predecessor = {
  word: string;
  score: number;
};

export const useGetPredecessors = () => {
  const [predecessors, setPredecessors] = useState<Predecessor[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getPredecessors = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setPredecessors)
      .then(() => setIsLoading(false));
  };

  return { isLoading, predecessors, getPredecessors };
};
