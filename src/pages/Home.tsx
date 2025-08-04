// src/pages/Home.tsx
import React from 'react'
import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(135deg, #9933CC 0%, #66CC99 100%);
  color: #fff;
`

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`

const Subtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`

export default function Home() {
  return (
    <Container>
      <Title>Bem-vindo ao Moodify!</Title>
      <Subtitle>Escolha seu humor e descubra playlists incríveis.</Subtitle>
      {/* Aqui depois entra o componente de seleção de mood e playlists */}
    </Container>
  )
}
