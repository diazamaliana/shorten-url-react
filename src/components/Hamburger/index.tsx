import './styles.scss';

interface IBarMenu {
  isOpen?: boolean;
}

const Hamburger = ({ isOpen }: IBarMenu) => {
  return (
    <div className="bar-menu">
      <div
        className="bar-menu__line-1"
        style={
          isOpen ? { transform: 'rotate(45deg)' } : { transform: 'rotate(0)' }
        }
      />
      <div
        className="bar-menu__line-2"
        style={
          isOpen
            ? { transform: 'translateX(100%)', opacity: '0' }
            : { transform: 'translateX(0)', opacity: '1' }
        }
      />
      <div
        className="bar-menu__line-3"
        style={
          isOpen ? { transform: 'rotate(-45deg)' } : { transform: 'rotate(0)' }
        }
      />
    </div>
  );
};

export default Hamburger;
