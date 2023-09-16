import { useState } from 'react';
import './App.css';

type Synonym = {
  word: string;
  score: number;
};

const BASE_URL = import.meta.env.VITE_BASE_URL ?? `https://api.datamuse.com`;

function Synonym() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const fetchSynonyms = async (e: React.FormEvent) => {
    e.preventDefault();

    const SYNONYM_API_URL = `${BASE_URL}/words?rel_syn=${word}`;

    try {
      const response = await fetch(SYNONYM_API_URL);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setSynonyms(data);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
      <h1>World of Words</h1>
      <form onSubmit={fetchSynonyms}>
        <label htmlFor="word-input">Find synonyms for: </label>
        <input
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button>Search</button>
      </form>
      <ul>
        {synonyms.map((synonym) => (
          <li key={synonym.score}>{synonym.word}</li>
        ))}
      </ul>
    </div>
  );
}

export default Synonym;
