import './styles.scss';
import Logo from 'assets/icons/logo.svg';
import Button from 'components/Button';

import { MENUS } from './menu';
import MobileNav from 'components/mobile-nav';

const menuList = MENUS.map((menu, idx) => {
  return (
    <a href={menu.path} className="header__navigation-menu--item" key={idx}>
      <p>{menu.title}</p>
    </a>
  );
});

const Header = () => {
  return (
    <header className="header">
      <div className="header__navigation">
        <a href="/" className="header__navigation-logo">
          <img loading={'lazy'} src={Logo} alt={'logo'} />
        </a>
        <div className="header__navigation-menu">{menuList}</div>
      </div>
      <div className="header__register">
        <a href="/" className="header__register-login">
          Login
        </a>
        <span className="header__register-signup">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--small"
            type="button"
          >
            {'Sign Up'}
          </Button>
        </span>
        <div className="header__register-mobile">
          <MobileNav>{menuList}</MobileNav>
        </div>
      </div>
    </header>
  );
};

export default Header;
