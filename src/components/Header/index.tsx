
import logo from '../../assets/logo-dio.png'
import { useNavigate  } from "react-router-dom";

import { Button } from '../Button';

import { Container, Wrapper, SearchInputContainer, Input, Row, Menu, MenuRight, UserPicture, Name, LinkOut} from './styles';
import { useAuth } from '../../hooks/useAuth';

const Header = () => {
    
    const { user, handleSignOut } = useAuth();

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

                {user.id ? (
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
                
                {user.id ? (
                <>
                    <UserPicture src="https://avatars.githubusercontent.com/u/146017558?v=4"/>
                    <Name>{user.name}</Name>
                    <LinkOut onClick={ handleSignOut }>Sair</LinkOut>
                </>
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