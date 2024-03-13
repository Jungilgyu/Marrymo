import {ReactNode} from 'react';
import Link from 'next/link';

import {
  CommonButtonVariantProps,
  ButtonWrapper,
  commonButton,
} from './index.css';

interface ButtonProps {
  children: ReactNode;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
  type: 'submit' | 'reset' | 'button';
  size?: string;
  colorStyle?: string;
  filled?: boolean;
}

const Button = ({
                  link,
                  children,
                  disabled,
                  onClick,
                  type,
                  size,
                  colorStyle,
                  filled,
                }: ButtonProps) => {
  if (link) {
    return (
      <div>
        <Link
          href={link}
          className={commonButton({size, colorStyle, filled})}
        >
          {children}
        </Link>
      </div>
    )
  }

  return (
    <div className={ButtonWrapper[size]}>
      <button type={type}
              disabled={disabled}
              className={commonButton({size, colorStyle, filled})}
              onClick={onClick}>
        {children}
      </button>
    </div>
  )
}

export default Button