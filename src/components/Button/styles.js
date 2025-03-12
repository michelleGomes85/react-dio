import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: #565656;
    border-radius: 22px;
    position: relative;
    color: #FFF;
    padding: 2px 12px;
    min-width: 120px;
    width: 100%;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.3s ease;

    ${({ variant }) => variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;

        &:hover {
            opacity: 0.8;
        }

        &::after {
            content: '';
            position: absolute;
            inset: -5px; /* Isso mantém a borda alinhada corretamente */
            border: 1px solid #E4105D;
            border-radius: 22px;
            pointer-events: none;
        }
    `}

    &:active {
        transform: scale(0.95); /* Reduz o tamanho ao clicar para um efeito mais natural */
    }
`;
