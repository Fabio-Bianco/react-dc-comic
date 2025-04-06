
// src/components/Header/Menu.jsx
export default function Menu({ links }) {
    return (
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
  }
  