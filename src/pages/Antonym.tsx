import { useState } from 'react';
import { useGetAntonyms } from '../hooks/useGetAntonyms';
import '../Word.css';

function Antonym() {
  const [word, setWord] = useState('');
  const { isLoading, antonyms, getAntonyms } = useGetAntonyms();

  const fetchAntonyms = async (e: React.FormEvent) => {
    e.preventDefault();
    getAntonyms(word);
  };

  const antonymClicked = (newWord: string) => {
    setWord(newWord); // Updates the input word on clicking a antonym
    getAntonyms(newWord);
  };

  return (
    <div className="container">
      <h1>List of Antonyms</h1>
      <form onSubmit={fetchAntonyms}>
        <label htmlFor="word-input">Find antonyms for: </label>
        <input
          className="placeholder"
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        ></input>
        <button>Search</button>
      </form>
      <h3 className="result">Here Are the results: </h3>
      {isLoading ? (
        <div>Loading....</div>
      ) : (
        <ul>
          {antonyms.map((antonym) => (
            <li
              onClick={() => antonymClicked(antonym.word)}
              key={antonym.score}
            >
              {antonym.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Antonym;
