import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    max-width: 275px;
    height: 30px;
    border-bottom: 1px solid #3B3450;

    display: flex;
    align-items: center;
    margin-bottom: 20px;
`

export const IconContainer = styled.div`
    margin-right: 10px;
    font-size: 20px;
    color: #8647AD;
`
export const InputText = styled.input`
    background-color: transparent;
    color: #FFF;
    border: none;
    height: 30px;
    outline: none; /* Remove a borda ao focar */
    
    width: 100%;

    &:focus {
        outline: none;
        border: none;
    }

    &:focus-visible {
        outline: none;
        border: none;
    }
`;

export const ErrorText = styled.p`
    color: #FF0000;
    font-size: 12px;
    margin-top: 5px 0 !important;
    margin-bottom: 20px;
`