
import { MdEmail, MdLock } from 'react-icons/md';

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper  } from "./styles";

const Login = () => {
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido 
            nas empresas desejadas.         
          </Title>
        </Column>

        <Column>
            <Wrapper>
              <TitleLogin>Faça seu cadastro</TitleLogin>
              <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
              <form>
                <Input placeholder="E-email" leftIcon={<MdEmail />}/>
                <Input placeholder="Senha" type="password" leftIcon={<MdLock />}/>
                <Button title="Entrar" variant="secondary" />
              </form>
              
              <Row>
                <ForgotText>Esqueci minha senha</ForgotText>
                <CreateText>Criar Conta</CreateText>
              </Row>
            </Wrapper>
              
        </Column>
      </Container>
    </>
  );
};

export default Login;
