import { useState } from 'react';
import { useGetFollowers } from '../hooks/useGetFollowers';
import '../Word.css';
import { MagnifyingGlass } from 'react-loader-spinner';

function Follower() {
  const [word, setWord] = useState('');
  const { isLoading, followers, getFollowers } = useGetFollowers();
  const [hasFollowers, setHasFollowers] = useState(false); // State variable to track if the result has any followers

  const fetchFollowers = async (e: React.FormEvent) => {
    e.preventDefault();
    getFollowers(word);
    setHasFollowers(false); // Reset the state when searching for new followers from the list
  };

  const followerClicked = (newWord: string) => {
    setWord(newWord);
    getFollowers(newWord);
    setHasFollowers(followers.length > 0); // Set the state based on whether there are followers
  };

  return (
    <div className="container">
      <h1>World of Words</h1>
      <form onSubmit={fetchFollowers}>
        <label htmlFor="word-input">Find frequent followers for: </label>
        <input
          className="placeholder"
          id="word-input"
          type="text"
          onChange={(e) => setWord(e.target.value)}
          value={word}
        />
        <button>Search</button>
      </form>
      {hasFollowers && <h3 className="result">Here Are the results:</h3>}
      {/* {hasFollowers ? (
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
          {followers.map((follower, index) => (
            <li
              onClick={() => followerClicked(follower.word)}
              key={index}
            >
              {follower.word}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Follower;
