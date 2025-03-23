import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
    background: transparent;
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

    &:active {
        transform: scale(0.95); /* Reduz o tamanho ao clicar para um efeito mais natural */
    }

    ${({ $variant }) => $variant !== "primary" && css`
        min-width: 167px;
        height: 33px;
        background: #E4105D;
        margin-top: 15px;

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

    ${({ $variant }) => $variant !== "secondary" && css`
        margin-left: 20px;  

        border: 1px solid #ffffff;
        padding: 5px 12px;

        &:hover {
            background: #E4105D;
            border: 1px solid #E4105D;
        }
    `}
`;
