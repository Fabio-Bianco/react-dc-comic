

import './Header.css';

export default function Header({ links }) {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/dc-logo.png" alt="DC Comics Logo" />
        </div>
        <nav className="nav">
          <ul className="menu">
            {links.map((link, i) => (
              <li key={i} className="menu-item">
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
