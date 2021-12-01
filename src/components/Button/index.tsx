import { IButton } from 'types/button';
import './styles.scss';

const STYLES = ['btn--primary', 'btn--secondary', 'btn--secondary-active'];

const SIZES = ['btn--medium', 'btn--large', 'btn--small'];

const Button = ({
  children,
  type,
  buttonStyle,
  buttonSize,
  ...props
}: IButton) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <button
      {...props}
      className={`btn ${checkButtonStyle} ${checkButtonSize}`}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
