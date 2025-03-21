import React from 'react'
import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header authentication={true}/>
        <Container>
            <Column $flex={4}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column $flex={2}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Michelle Gomes" image="https://avatars.githubusercontent.com/u/146017558?v=4" percentual={25}/>
                <UserInfo nome="Michelle Gomes" image="https://avatars.githubusercontent.com/u/146017558?v=4" percentual={65}/>
                <UserInfo nome="Michelle Gomes" image="https://avatars.githubusercontent.com/u/146017558?v=4" percentual={45}/>
                <UserInfo nome="Michelle Gomes" image="https://avatars.githubusercontent.com/u/146017558?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export default Feed;