
import React from 'react'
import logo from '../../assets/logo-dio.png'
import { useNavigate  } from "react-router-dom";

import { Button } from '../Button';

import { Container, Wrapper, SearchInputContainer, Input, Row, Menu, MenuRight, UserPicture} from './styles';

type HeaderProps = {
  authentication?: boolean; 
};

const Header = ({ authentication = false }: HeaderProps) => {

    const navigate = useNavigate();

    const handleClickRoot = () => {
        navigate('/')
    }

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleClickRegister = () => {
        navigate('/register')
    }

    return (
        <Wrapper>
        <Container>
            <Row>
                
                <img 
                    src={logo} 
                    alt="Logo da dio" 
                    style={{ cursor: 'pointer' }} 
                    onClick={handleClickRoot} 
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
                    <Button title="Entrar" onClick={handleClickSignIn} />
                    <Button title="Cadastrar" onClick={handleClickRegister}/>
                </>)}
            </Row>
        </Container>
        </Wrapper>
    )
}

export { Header }