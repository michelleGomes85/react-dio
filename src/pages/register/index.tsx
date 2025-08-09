import { Header } from "../../components/Header";

import { useNavigate  } from "react-router-dom";

import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import { Column, Container,TermsOfUse, HaveAccount, LinkCreateAccount, SubTitleRegister, Title, TitleRegister, Wrapper } from "./styles";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { api } from "../../services/api";

const schema = yup.object({
    name: yup.string().min(12, 'Nome completo minimo 12 caracteres').required('Campo obrigatório'),
    email: yup.string().email('O email não é válido').required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório')
}).required();

const Register = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    });    

    const handleClickSignIn = () => {
        navigate('/login')
    }

    const handleRegister = async (data) => {
        
        try {
            const response = await api.post("/users", {
                name: data.name,
                email: data.email,
                senha: data.password
            });
    
            console.log("Usuário criado com sucesso:", response.data);
            alert("Usuário criado com sucesso!");
            navigate("/login");
        } catch (error) {
            console.error("Erro ao registrar usuário:", error);
            alert("Erro ao cadastrar usuário.");
        }
    };    

    return (
        <>
        <Header />
        <Container>
            <Column>
            <Title>
            A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.        
            </Title>
            </Column>

            <Column>
            <Wrapper>
                <TitleRegister>Comece agora grátis</TitleRegister>
                <SubTitleRegister>Crie sua conta e make the change._</SubTitleRegister>
                <form onSubmit={handleSubmit(handleRegister)}>
                    <Input name="name" control={control} errorMessage={errors.name?.message} placeholder="Nome Completo" leftIcon={<MdPerson />} />
                    <Input name="email" control={control} errorMessage={errors.email?.message} placeholder="E-mail" leftIcon={<MdEmail />} />
                    <Input name="password" control={control} errorMessage={errors.password?.message} placeholder="Password" type="password" leftIcon={<MdLock />} />
                    <Button title="CRIAR MINHA CONTA" variant="secondary" type="button" />
                </form>
                
                <TermsOfUse>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsOfUse>
                <HaveAccount>Já tenho conta.</HaveAccount>
                <LinkCreateAccount onClick={handleClickSignIn}>Fazer login</LinkCreateAccount>
            </Wrapper>
            </Column>
        </Container>
        </>
    );
};

export default Register;
