const BASE_URL = import.meta.env.VITE_BASE_URL ?? `https://api.datamuse.com`;

export const fetchData = async (word: string) => {
  const PREDECESSOR_API_URL = `${BASE_URL}/words?rel_bgb=${word}`;

  try {
    const response = await fetch(PREDECESSOR_API_URL);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
