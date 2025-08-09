import React from 'react'

import { ButtonContainer } from './styles'

type ButtonProps = {
  title: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void; 
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean; 
};

const Button = ({ title, variant = 'primary', onClick }: ButtonProps) => {

  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
        {title}
    </ButtonContainer>
  )
}

export { Button }