import { Link } from 'react-router-dom';
import './index.css';

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        Words-of-Wonder
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/antonym">Antonym</Link>
        </li>
        <li>
          <Link to="/synonym">Synonym</Link>
        </li>
      </ul>
    </div>
  );
}
