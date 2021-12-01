import Button from 'components/Button';
import './styles.scss';

const FormsLinks = () => {
  return (
    <div className="form">
      <form className="form__input">
        <input
          type="text"
          className="form__input-field"
          placeholder={'Shorten a link here...'}
        />
        <Button
          buttonStyle="btn--secondary"
          buttonSize="btn--medium"
          type="submit"
        >
          {'Shorten it!'}
        </Button>
      </form>
      <div className="form__link">
        <p className="form__link-original">Hello</p>
        <a className="form__link-shorten" href="">
          Link
        </a>
        <Button
          buttonStyle="btn--secondary-active"
          buttonSize="btn--small"
          type="button"
        >
          {'Copy'}
        </Button>
      </div>
    </div>
  );
};

export default FormsLinks;
