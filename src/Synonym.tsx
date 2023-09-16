import { useState } from 'react';
import './App.css';

function Synonym() {
  const [word, setWord] = useState('');

  return (
    <>
      <h1>World of Words</h1>
      <form>
        <label htmlFor="word-input">Find synonyms for: </label>
        <input
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button>Search</button>
      </form>
    </>
  );
}

export default Synonym;
