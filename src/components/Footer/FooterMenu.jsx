// src/components/Footer/FooterMenu.jsx
import footerLinks from '../../data/footerLinks';


const FooterMenu = () => {
  return (
    <div className="footer-columns">
      {footerLinks.map((section, index) => (
        <div key={index} className="footer-column">
          <h4>{section.title}</h4>
          <ul>
            {section.links.map((link, i) => (
              <li key={i}>{link}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FooterMenu;
