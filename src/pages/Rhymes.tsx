import { useState } from 'react';
import { useGetRhymes } from '../hooks/useGetRhymes';
import '../Word.css';
import { MagnifyingGlass } from 'react-loader-spinner';

function Rhymes() {
  const [word, setWord] = useState('');
  const { isLoading, rhymes, getRhymes } = useGetRhymes();
  const [hasRhymes, setHasRhymes] = useState(false); // State variable to track if the result has any rhyme

  const fetchRhymes = async (e: React.FormEvent) => {
    e.preventDefault();
    getRhymes(word);
    setHasRhymes(false); // Reset the state when searching for new rhyme from the list
  };

  const rhymesClicked = (newWord: string) => {
    setWord(newWord);
    getRhymes(newWord);
    setHasRhymes(rhymes.length > 0); // Set the state based on whether there are rhyme
  };

  return (
    <div className="container">
      <h1>World of Words</h1>
      <form onSubmit={fetchRhymes}>
        <label htmlFor="word-input">Find words rhyming with: </label>
        <input
          className="placeholder"
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button>Search</button>
      </form>
      {hasRhymes && <h3 className="result">Here Are the results:</h3>}
      {/* {hasRhymes ? (
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
          {rhymes.map((rhymes) => (
            <li onClick={() => rhymesClicked(rhymes.word)} key={rhymes.score}>
              {rhymes.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Rhymes;
