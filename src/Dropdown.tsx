// import TMenuitems from './menuitems';

// const Dropdown: React.FC<{ submenu: TMenuItems[] }> = ({ submenu }) => {
//   console.log("Inside Dropdown.tsx");
//   return (
//     <ul className="dropdown">
//       {submenu.map((submenu: TMenuitems, index: number) => (
//         <li key={index} className="menu-items">
//           <a href={submenu.url}>{submenu.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default Dropdown;

import React, { useState } from 'react';

type TMenuItem = {
  title: string;
  url: string | undefined;
  submenu?: TMenuItem[];
};

type DropdownProps = {
  items: TMenuItem[];
};

const MenuItem: React.FC<{ item: TMenuItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSubMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li>
      <a href={item.url} onMouseOver={toggleSubMenu}
      // onmou={toggleSubMenu} 
      >
        {item.title}
      </a>
      {item.submenu && isOpen && (
        <ul>
          {item.submenu.map((subItem, index) => (
            <MenuItem key={index} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Dropdown: React.FC<DropdownProps> = ({ items }) => {
  return (
    <nav>
      <ul>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </nav>
  );
};

export default Dropdown;