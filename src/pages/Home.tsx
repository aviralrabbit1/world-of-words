export const Home = () => {
  return (
    <div>
      <h2>
      Explor World of Words: a playful project, utilising words and their magic!
      </h2>
      <div className="word-definitions">
        <h3>
          This website is your one-stop shop for everything language related. 
        </h3>
        {/* Embark on a journey of discovery through the fascinating world of language. */}
        <ul>
          <li>**Synonym:** A word with a similar meaning (e.g., <span>happy & glad</span>)</li>
          <li>**Antonym:** A word with the opposite meaning (e.g., <span>happy & sad</span>)</li>
          <li>**Rhymes:** Words that share similar ending sounds (e.g., <span>cat & hat</span>)</li>
          <li>**Followers:** Words that frquently come after a word (e.g., <span>wreak → havoc</span>)</li>
          <li>**Predecessors:** Words that frquently come before a word (e.g., <span>	havoc → wreak</span>)</li>
        </ul>
        {/* Find synonyms, antonyms, rhyming words, and delve deeper into the fascinating world of language. */}
      </div>
    </div>
  );
};
