import { useState } from 'react';
import { useGetSynonyms } from '../hooks/useGetSynonyms';
import '../Word.css';

function Synonym() {
  const [word, setWord] = useState('');
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();

  const fetchSynonyms = async (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
  };

  const synonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(newWord);
  };

  return (
    <div className="container">
      <h1>List of Synonyms</h1>
      <form onSubmit={fetchSynonyms}>
        <label htmlFor="word-input">Find synonyms for: </label>
        <input
          className="placeholder"
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button>Search</button>
      </form>
      {isLoading ? (
        <div className="loading">Loading....</div>
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
