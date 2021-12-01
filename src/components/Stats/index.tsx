import './styles.scss';
import Card from 'components/Card';
import { CARDS, content } from './content';
import FormLinks from 'components/FormLinks';

const Stats = () => {
  return (
    <section className="statistic">
      <FormLinks></FormLinks>
      <div className="statistic__content">
        <h2 className="statistic__content-title">{content.title}</h2>
        <p className="statistic__content-text">{content.text}</p>
      </div>
      <div className="statistic__card-list">
        {CARDS.map(({ title, src, description }) => (
          <Card key={title} src={src} title={title} description={description} />
        ))}
      </div>
      <div className="line"></div>
    </section>
  );
};

export default Stats;
