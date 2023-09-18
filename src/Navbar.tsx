import { Link } from 'react-router-dom';
import './index.css';
import { menuItemsList } from './menuitems';
import Dropdown from './Dropdown';

export default function Nav() {
  // console.log(menuItemsList);
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        World-of-Words
      </Link>
      <ul className="nav-links">
        <Dropdown items={menuItemsList} />
        {/* <li className="nav-links">
          {menuItemsList.submenu ? (
            <>
              <button type="button" aria-haspopup="menu">
                {menuItemsList.title}{' '}
              </button>
              <Dropdown submenu={menuItemsList.submenu} />
            </>
          ) : (
            <a href={menuItemsList.url}>{menuItemsList.title}</a>
          )}
        </li> */}
      </ul>
    </nav>
  );
}
