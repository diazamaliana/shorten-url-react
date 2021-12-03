import React, { useState } from 'react';
import Button from 'components/Button';
import './styles.scss';

import { CopyToClipboard } from 'react-copy-to-clipboard';

const FormsLinks = ({ onUrlSubmit, links, children, ...props }: any) => {
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

  const LinkList = links.map((url: any) => {
    const [isCopied, setIsCopied] = useState(false);

    const onCopyText = () => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    };

    return (
      <div className="form__link" key={url.result.code}>
        <a href={url.result.original_link} className="form__link-original">
          {url.result.original_link}
        </a>
        <a className="form__link-shorten" href={url.result.full_short_link}>
          {url.result.full_short_link}
        </a>
        <CopyToClipboard text={url.result.full_short_link} onCopy={onCopyText}>
          <Button
            buttonStyle={isCopied ? 'btn--secondary-active' : 'btn--secondary'}
            buttonSize="btn--small"
            type="submit"
          >
            {isCopied ? 'Copied!' : 'Copy'}
          </Button>
        </CopyToClipboard>
      </div>
    );
  });

  return (
    <div className="form">
      <div className="form__box">
        <form className="form__box-input" onSubmit={handleSubmit}>
          <input
            {...props}
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
      {LinkList}
      {children}
    </div>
  );
};

export default FormsLinks;
