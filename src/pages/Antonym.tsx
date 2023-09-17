import { useState } from 'react';
import { useGetAntonyms } from '../hooks/useGetAntonyms';
import '../Word.css';
import { MagnifyingGlass } from 'react-loader-spinner';

function Antonym() {
  const [word, setWord] = useState('');
  const { isLoading, antonyms, getAntonyms } = useGetAntonyms();
  const [hasAntonyms, setHasAntonyms] = useState(false); // State variable to track if the result has any antonyms

  const fetchAntonyms = async (e: React.FormEvent) => {
    e.preventDefault();
    setHasAntonyms(false); // Reset the state when searching for new synonyms from the list
    getAntonyms(word);
    setHasAntonyms(antonyms.length > 0); // Set the state based on whether there are synonyms
  };

  const antonymClicked = (newWord: string) => {
    setHasAntonyms(false); // Reset the state when searching for new synonyms from the list
    setWord(newWord); // Updates the input word on clicking a antonym
    getAntonyms(newWord);
    setHasAntonyms(antonyms.length > 0); // Set the state based on whether there are synonyms
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
      {hasAntonyms && <h3 className="result">Here Are the results:</h3>}
      {/* {hasAntonyms ? (
        <h3 className="result">Here Are the results:</h3>
      ) : (
        <h3 className="result">There are no results.</h3>
      )} */}
      {isLoading ? (
        <div>
          Loading....
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        </div>
      ) : (
        <ul>
          {antonyms.map((antonym, index: number) => (
            <li
              onClick={() => antonymClicked(antonym.word)}
              key={index}
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
