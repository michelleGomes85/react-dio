import React from 'react'

import { Container, NameText, Progress, UserPicture} from './styles';

type UserInfoProps = {
  nome: string;
  image: string;
  percentual: number;
};

const UserInfo = ({nome,image, percentual}: UserInfoProps) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{nome}</NameText>
            <Progress $percentual={percentual} />
        </div>
    </Container>
  )
}

export { UserInfo }