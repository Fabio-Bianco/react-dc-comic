
import './Footer.css';
import FooterMenu from './FooterMenu';
import FooterBottom from './FooterBottom';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <FooterMenu />
        
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

