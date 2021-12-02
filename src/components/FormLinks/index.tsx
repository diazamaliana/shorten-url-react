import React, { useState } from 'react';
import Button from 'components/Button';
import './styles.scss';

const FormsLinks = ({ onUrlSubmit, ...rest }: any) => {
  const [url, setUrl] = useState('');
  const [formError, setFormError] = useState('');
  const [isValid, setIsValid] = React.useState<boolean>(true);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!url || !url.trim()) {
      setFormError('Please add a link');
      setIsValid(false);
    } else {
      setFormError('');
      setIsValid(true);
      onUrlSubmit(url);
    }

    setUrl('');
  };

  return (
    <div className="form">
      <div className="form__box">
        <form className="form__box-input" onSubmit={handleSubmit}>
          <input
            {...rest}
            type="text"
            className={
              isValid
                ? 'form__box-input--field'
                : 'form__box-input--field-alert'
            }
            placeholder={'Shorten a link here...'}
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <Button
            buttonStyle="btn--secondary"
            buttonSize="btn--medium"
            type="submit"
          >
            {'Shorten it!'}
          </Button>
        </form>
        {formError ? (
          <p className="form__box-input--alert">{formError}</p>
        ) : null}
      </div>
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
