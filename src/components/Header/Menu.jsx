// src/components/Header/Menu.jsx
import './Menu.css';

const Menu = ({ links }) => (
  <nav className="menu">
    <ul className="menu-list">
      {links.map((item, index) => (
        <li key={index} className="menu-item">
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Menu;
