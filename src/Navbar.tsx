import { Link } from 'react-router-dom';
import './index.css';

export default function Nav() {
  return (
    <div className="navbar">
      <div className="logo">Words-of-Wonder</div>
      <ul className="nav-links">
        <Link to="/">Home</Link>
        {/* <Link to="/*"></Link> */}
        <Link to="/antonym">Antonym</Link>
        <Link to="/synonym">Synonym</Link>
      </ul>
    </div>
  );
}
