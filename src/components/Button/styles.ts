import styled, { css } from 'styled-components';

// Define o tipo da prop personalizada
type ButtonContainerProps = {
  $variant: 'primary' | 'secondary';
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  background: transparent;
  border-radius: 22px;
  position: relative;
  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;

  &:active {
    transform: scale(0.95);
  }

  ${({ $variant }) => $variant !== 'primary' &&
    css`
      min-width: 167px;
      height: 33px;
      background: #e4105d;
      margin-top: 15px;

      &:hover {
        opacity: 0.8;
      }

      &::after {
        content: '';
        position: absolute;
        inset: -5px;
        border: 1px solid #e4105d;
        border-radius: 22px;
        pointer-events: none;
      }
    `}

  ${({ $variant }) => $variant !== 'secondary' &&
    css`
      margin-left: 20px;
      border: 1px solid #ffffff;
      padding: 5px 12px;

      &:hover {
        background: #e4105d;
        border: 1px solid #e4105d;
      }
    `}
`;