import { Link } from 'react-router-dom';
import './index.css';
import { menuItems } from './MenuItems';

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        World-of-Words
      </Link>
      <ul className="nav-links">
        {menuItems.map((menu: { url: string | undefined; title: string }, index: number) => {
          return (
            <li className="menu-items" key={index}>
              <a href={menu.url}>{menu.title}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
