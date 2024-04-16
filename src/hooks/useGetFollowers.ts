import { useState } from 'react';
import { fetchData } from '../api/fetchFollowers';

export type Follower = {
  word: string;
  score: number;
};

export const useGetFollowers = () => {
  const [followers, setFollowers] = useState<Follower[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getFollowers = (word: string) => {
    setIsLoading(true);
    fetchData(word)
      .then(setFollowers)
      .then(() => setIsLoading(false));
  };

  return { isLoading, followers, getFollowers };
};
