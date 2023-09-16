import { useState } from 'react';
import './App.css';

type Synonym = {
  word: string;
  score: number;
};

function Synonym() {
  const [word, setWord] = useState('');
  const [synonyms, setSynonyms] = useState<Synonym[]>([]);

  const fetchSynonyms = async (e: React.FormEvent) => {
    e.preventDefault();

    const API_URL = `https://api.datamuse.com/words?rel_syn=slow`;

    try {
      const response = await fetch(API_URL);

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
    </div>
  );
}

export default Synonym;
