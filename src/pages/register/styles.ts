import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Wrapper = styled.div`
    max-width: 350px;
`

export const Column = styled.div`
    flex: 1;
`

export const Title = styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 500px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFF;
`

export const TitleRegister = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubTitleRegister = styled.p`
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    width: 320px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const TermsOfUse = styled.p`
    margin-top: 30px;
    font-weight: 400;
    line-height: 25px;
`

export const HaveAccount = styled.p`
    display: inline-block;
    margin-top: 15px;
    font-weight: bold;
`

export const LinkCreateAccount = styled.a`
    margin-left: 5px;
    color: #23DD7A;
    font-weight: bold;
    cursor: pointer;
`


