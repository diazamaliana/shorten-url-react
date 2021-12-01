import './styles.scss';
import Hamburger from 'components/Hamburger';
import { useState } from 'react';
import Button from 'components/Button';

const MobileNav = ({ children }: any) => {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <div className="mobile">
      {hamburgerOpen ? (
        <>
          <ul className="mobile__item">
            <li className="mobile__item-list">{children}</li>
            <hr className="mobile__divider" />
            <li className="mobile__item-list">
              <a href="/" className="mobile__item-list--login">
                {'Login'}
              </a>
            </li>
            <li className="mobile__item-list">
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                type="button"
              >
                {'Sign Up'}
              </Button>
            </li>
          </ul>
          <div className="mobile__hamburger" onClick={toggleHamburger}>
            <Hamburger isOpen={hamburgerOpen}></Hamburger>
          </div>
        </>
      ) : (
        <div className="mobile__hamburger" onClick={toggleHamburger}>
          <Hamburger isOpen={hamburgerOpen}></Hamburger>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
