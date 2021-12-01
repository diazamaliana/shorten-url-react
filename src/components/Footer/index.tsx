import './styles.scss';
import Logo from 'assets/icons/logo.svg';
import { MENUS } from 'components/Footer/menu';
import { SOCIAL } from './social';

const socialList = SOCIAL.map((socmed, idx) => {
  return (
    <a href={socmed.path} className="footer__social--item" key={idx}>
      <img
        loading={'lazy'}
        src={require(`assets/icons/${socmed.src}`).default}
        alt={socmed.name}
      />
    </a>
  );
});

const menuList = MENUS.map((menu, idx) => {
  return (
    <div className="footer__menu--item" key={idx}>
      <p>{menu.title}</p>
      <ul>
        {menu.subMenu?.map((subMenu, idx) => {
          return (
            <li key={idx}>
              <a href={subMenu.path} className="footer__menu--item-list">
                {subMenu.title}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
});

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__brand">
        <a href="/" className="footer__brand-logo">
          <img loading={'lazy'} src={Logo} alt={'logo'} />
        </a>
      </div>
      <div className="footer__menu">{menuList}</div>
      <div className="footer__social">{socialList}</div>
    </footer>
  );
};

export default Footer;
