import './styles.scss';
import Working from 'assets/images/illustration-working.svg';
import Button from 'components/Button';
import { content } from './content';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__image">
        <img loading={'lazy'} src={Working} alt={'ilustration-working'} />
      </div>
      <div className="hero__content">
        <h1 className="hero__content-title">{content.title}</h1>
        <p className="hero__content-text">{content.text}</p>
        <div className="hero__content-cta">
          <Button
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            type="button"
          >
            {'Get Started'}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
