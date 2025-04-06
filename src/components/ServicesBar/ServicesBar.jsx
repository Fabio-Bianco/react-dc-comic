import './ServicesBar.css';
import iconDigital from '../../assets/img/buy-comics-digital-comics.png';
import iconMerch from '../../assets/img/buy-comics-merchandise.png';
import iconSub from '../../assets/img/buy-comics-subscriptions.png';
import iconLocator from '../../assets/img/buy-comics-shop-locator.png';
import iconVisa from '../../assets/img/buy-dc-power-visa.svg';


const services = [
  {
    label: 'Digital Comics',
    icon: iconDigital,
  },
  {
    label: 'DC Merchandise',
    icon: iconMerch,
  },
  {
    label: 'Subscription',
    icon: iconSub,
  },
  {
    label: 'Comic Shop Locator',
    icon: iconLocator,
  },
  {
    label: 'DC Power Visa',
    icon: iconVisa,
  },
];

const ServicesBar = () => {
  return (
    <section className="services-bar">
      <ul className="services-list">
        {services.map((service, index) => (
          <li key={index}>
            <img src={service.icon} alt={service.label} />
            <span>{service.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesBar;
