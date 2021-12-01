import Button from 'components/Button';
import './styles.scss';

const BootsCTA = () => {
  return (
    <div className="boots-cta">
      <h2 className="boots-cta__title">Boots your links today</h2>
      <div className="boots-cta__btn">
        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--medium"
          type="button"
        >
          {'Get Started'}
        </Button>
      </div>
    </div>
  );
};

export default BootsCTA;
