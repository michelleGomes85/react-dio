import React from 'react';
import { Control, Controller } from "react-hook-form";

import { IconContainer, InputContainer, InputText, ErrorText } from './styles';

type InputProps = {
  name: string;
  control: Control<any>;
  leftIcon?: React.ReactNode;
  errorMessage?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name' | 'id'>; 

const Input = ({ leftIcon, name, control, errorMessage, ...rest }: InputProps) => {
  return (
    <>
      <InputContainer>
        {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
        <Controller 
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };