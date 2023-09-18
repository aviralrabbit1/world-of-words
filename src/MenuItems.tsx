import Dropdown from './Dropdown';
import TMenuitems, { menuItemsList } from './menuitems';

const MenuItems = ({ menuItemsList }) => {
  return (
    <li className="nav-links">
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
    </li>
  );
};

export default MenuItems;
