
import './Footer.css';
import FooterMenu from './FooterMenu';
import FooterBottom from './FooterBottom';
import logoDC from '../../assets/img/dc-logo-bg.png'; // 👈 importa il logo

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <FooterMenu />
        <img src={logoDC} alt="DC Logo" className="footer-logo-bg" /> {/* 👈 aggiunto qui */}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;

