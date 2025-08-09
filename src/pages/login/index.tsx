import { useNavigate } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md';
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from "../../services/api";
import { Column, Container, CreateText, ForgotText, Row, SubTitleLogin, Title, TitleLogin, Wrapper } from "./styles";


type FormData = {
  email: string;
  password: string;
};

const schema = yup.object({
  email: yup.string().email('O email não é válido').required('Campo obrigatório'),
  password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório')
}).required();

const Login = () => {
  
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if (data.length === 1) {
        navigate('/feed');
      } else {
        alert("Email ou senha inválido")
      }
    } catch (error) {
      alert('Houve algum erro, tente novamente');
    }
  };

  const handleRegister = () => {
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
              <Input 
              name="email" 
              control={control} 
              errorMessage={errors.email?.message} 
              placeholder="E-mail" 
              leftIcon={<MdEmail />} />

              <Input 
              name="password" 
              control={control} 
              errorMessage={errors.password?.message} 
              placeholder="Senha" 
              type="password" 
              leftIcon={<MdLock />} />
              
              <Button title="Entrar" variant="secondary" type="submit" />
            </form>

            <Row>
              <ForgotText>Esqueci minha senha</ForgotText>
              <CreateText onClick={handleRegister}>Criar Conta</CreateText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export default Login;
