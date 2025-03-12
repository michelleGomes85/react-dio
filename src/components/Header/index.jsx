import React from "react"

import {
    SearchInputContainer,
    Container,
    Input,
    Menu,
    MenuRight,
    Row,
    Wrapper
} from './styles';

import { Button } from "../Button";

const Header = () => {
  return (
    <Wrapper>
        <Container>
            <Row>
                <img src="" alt="logo da dio"></img>
                <SearchInputContainer>
                    <Input placeholder="Buscar ..." />
                </SearchInputContainer>
                <Menu>Live Code</Menu>
                <Menu>Global</Menu>
            </Row>

            <Row>
                <MenuRight href="#">Home</MenuRight>
                <Button title="Entrar" />
                <Button title="Cadastrar" />
            </Row>
        </Container>
    </Wrapper>
  )
}

export {Header}
