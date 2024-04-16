import { useState } from 'react';
import { useGetPredecessors } from '../hooks/useGetPredecessors';
import '../Word.css';
import { MagnifyingGlass } from 'react-loader-spinner';

function Predecessor() {
  const [word, setWord] = useState('');
  const { isLoading, predecessors, getPredecessors } = useGetPredecessors();
  const [hasPredecessors, setHasPredecessors] = useState(false); // State variable to track if the result has any predecessors

  const fetchPredecessors = async (e: React.FormEvent) => {
    e.preventDefault();
    getPredecessors(word);
    setHasPredecessors(false); // Reset the state when searching for new predecessors from the list
  };

  const predecessoClicked = (newWord: string) => {
    setWord(newWord);
    getPredecessors(newWord);
    setHasPredecessors(predecessors.length > 0); // Set the state based on whether there are predecessors
  };

  return (
    <div className="container">
      <h1>World of Words</h1>
      <form onSubmit={fetchPredecessors}>
        <label htmlFor="word-input">Find frequent predecessors for: </label>
        <input
          className="placeholder"
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button>Search</button>
      </form>
      {hasPredecessors && <h3 className="result">Here Are the results:</h3>}
      {/* {hasPredecessors ? (
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
          {predecessors.map((predecesso, index) => (
            <li
              onClick={() => predecessoClicked(predecesso.word)}
              key={index}
            >
              {predecesso.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Predecessor;
