// src/components/Header/Header.jsx
import './Header.css';
import Menu from './Menu';

const Header = ({ links }) => (
  <header className="header">
    <div className="header-container">
      <div className="logo">
        <img src="/dc-logo.png" alt="DC Comics Logo" />
      </div>
      <Menu links={links} />
    </div>
  </header>
);

export default Header;
