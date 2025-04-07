// src/components/Footer/FooterMenu.jsx
import footerLinks from '../../data/footerLinks';

const FooterMenu = () => {
  // Troviamo separatamente le sezioni
  const dcComicsSection = footerLinks.find(section => section.title === 'DC COMICS');
  const shopSection = footerLinks.find(section => section.title === 'SHOP');
  const otherSections = footerLinks.filter(
    section => section.title !== 'DC COMICS' && section.title !== 'SHOP'
  );

  return (
    <div className="footer-columns">
      {/* Colonna con DC COMICS + SHOP sotto */}
      <div className="footer-column">
        <h4>{dcComicsSection.title}</h4>
        <ul>
          {dcComicsSection.links.map((link, i) => (
            <li key={`dc-${i}`}>{link}</li>
          ))}
        </ul>

        <h4>{shopSection.title}</h4>
        <ul>
          {shopSection.links.map((link, i) => (
            <li key={`shop-${i}`}>{link}</li>
          ))}
        </ul>
      </div>

      {/* Le altre sezioni restano come sono */}
      {otherSections.map((section, index) => (
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

