import { ICard } from 'types/content';
import './styles.scss';

const Card = ({ title, src, description }: ICard) => {
  return (
    <div className="card">
      <div className="card__logo">
        <img
          className="card__logo-img"
          loading={'lazy'}
          src={src}
          alt={title}
        />
      </div>
      <h3 className="card__title">{title}</h3>
      <p className="card__content">{description}</p>
    </div>
  );
};

export default Card;
