import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";

const schema = yup.object({
  email: yup.string().email('O email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório')
}).required();

const Login = () => {
  
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: "",
      password: ""
    }
  });

  console.log(isValid, errors);

  const onSubmit = (data, event) => {
    event.preventDefault(); 
    console.log(data);
  };

  const handleSignUp = () => {
    navigate('/register');
  };

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
            <TitleLogin>Faça seu login</TitleLogin>
            <SubTitleLogin>Faça seu login e make the change.</SubTitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input name="email" control={control} errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
              <Input name="password" control={control} errorMessage={errors.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />} />
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText onClick={handleSignUp}>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
