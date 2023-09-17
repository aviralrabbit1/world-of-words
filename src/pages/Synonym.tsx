import { useState } from 'react';
import { useGetSynonyms } from '../hooks/useGetSynonyms';
import '../Word.css';
import { MagnifyingGlass } from 'react-loader-spinner';

function Synonym() {
  const [word, setWord] = useState('');
  const { isLoading, synonyms, getSynonyms } = useGetSynonyms();
  const [hasSynonyms, setHasSynonyms] = useState(false); // State variable to track if the result has any synonyms

  const fetchSynonyms = async (e: React.FormEvent) => {
    e.preventDefault();
    getSynonyms(word);
    setHasSynonyms(false); // Reset the state when searching for new synonyms from the list
  };

  const synonymClicked = (newWord: string) => {
    setWord(newWord);
    getSynonyms(newWord);
    setHasSynonyms(synonyms.length > 0); // Set the state based on whether there are synonyms
  };

  return (
    <div className="container">
      <h1>World of Words</h1>
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
      {hasSynonyms && <h3 className="result">Here Are the results:</h3>}
      {/* {hasSynonyms ? (
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
          {synonyms.map((synonym, index) => (
            <li
              onClick={() => synonymClicked(synonym.word)}
              key={index}
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
