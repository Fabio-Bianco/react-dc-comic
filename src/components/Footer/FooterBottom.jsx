import facebookIcon from '../../assets/img/footer-facebook.png';
import twitterIcon from '../../assets/img/footer-twitter.png';
import youtubeIcon from '../../assets/img/footer-youtube.png';
import pinterestIcon from '../../assets/img/footer-pinterest.png';
import periscopeIcon from '../../assets/img/footer-periscope.png';

const FooterBottom = () => {
  return (
    <div className="footer-bottom">
      <button className="signup-btn">SIGN-UP NOW!</button>
      <div className="social">
        <span>FOLLOW US</span>
        <img src={facebookIcon} alt="Facebook" />
        <img src={twitterIcon} alt="Twitter" />
        <img src={youtubeIcon} alt="YouTube" />
        <img src={pinterestIcon} alt="Pinterest" />
        <img src={periscopeIcon} alt="Periscope" />
      </div>
    </div>
  );
};

export default FooterBottom;
  