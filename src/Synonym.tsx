import { useState } from 'react';
import './App.css';
import { useGetSynonyms } from './hooks/useGetSynonyms';

function Synonym() {
  const [word, setWord] = useState('');
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();

  const fetchSynonyms = async (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  };

  const synonymClicked = (newWord: string) => {
    setWord(newWord); // Updates the input word on clicking a synonym
    getSynonyms(newWord);
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
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <ul>
          {synonyms.map((synonym) => (
            <li
              onClick={() => synonymClicked(synonym.word)}
              key={synonym.score}
            >
              {synonym.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Synonym;
