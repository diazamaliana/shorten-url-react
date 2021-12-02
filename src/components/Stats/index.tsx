import './styles.scss';
import Card from 'components/Card';
import { CARDS, content } from './content';
import FormLinks from 'components/FormLinks';
import useShorten from 'hooks/useShorten';

const Stats = () => {
  const { appError, isLoading, getShortenUrl } = useShorten();

  return (
    <section className="statistic">
      <FormLinks onUrlSubmit={getShortenUrl}></FormLinks>
      {appError ? <p>Error</p> : null}
      {isLoading ? <p>Loading...</p> : null}
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
