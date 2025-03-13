
import React from 'react'
import logo from '../../assets/logo-dio.png';
import { useNavigate  } from "react-router-dom";

import { Button } from '../Button';

import { Container, Wrapper, SearchInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

const Header = ({authentication}) => {

    const navigate = useNavigate();

    const handleClickSignIn = () => {
        navigate('/')
    }

    return (
        <Wrapper>
        <Container>
            <Row>
                
                <img 
                    src={logo} 
                    alt="Logo da dio" 
                    style={{ cursor: 'pointer' }} 
                    onClick={handleClickSignIn} 
                />

                {authentication ? (
                <>
                <SearchInputContainer>
                    <Input placeholder='Buscar...'/>
                </SearchInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </>
                ) : null}
            </Row>
            <Row>
                {authentication ? (
                    <UserPicture src="https://avatars.githubusercontent.com/u/146017558?v=4"/>
                ) : (
                <>
                    <MenuRight href="/">Home</MenuRight>
                    <Button title="Entrar" />
                    <Button title="Cadastrar" />
                </>)}
            </Row>
        </Container>
        </Wrapper>
    )
}

export { Header }