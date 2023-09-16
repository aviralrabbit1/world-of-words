import { useState } from 'react';
import { useGetAntonyms } from '../hooks/useGetAntonyms';

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
    <div>
      <h1>World of Words</h1>
      <form onSubmit={fetchAntonyms}>
        <label htmlFor="word-input">Find antonyms for: </label>
        <input className='placeholder'
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
