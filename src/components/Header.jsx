import logo from "../assets/img/dc-logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} alt="DC Logo" className="logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#">Characters</a></li>
          <li><a href="#">Comics</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">TV</a></li>
          <li><a href="#">Games</a></li>
          <li><a href="#">Collectibles</a></li>
          <li><a href="#">Videos</a></li>
          <li><a href="#">Fans</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Shop</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
