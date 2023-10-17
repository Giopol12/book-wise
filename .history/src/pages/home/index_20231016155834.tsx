export default function Home() {
  return (
    <Container>
      <ImgContainer></ImgContainer>
      <LoginContainer>
        <TitleContainer>
          <h1>Boas vindas@</h1>
          <p>Faça seu login ou acesse como visitante.</p>
          <LoginButton>
            <Icon icon="flat-color-icons:google" width="32" height="32" />
            <p>Entrar com Google</p>
          </LoginButton>
          <LoginButton>Entrar com GitHub</LoginButton>
          <LoginButton>Acessar como visitante</LoginButton>
        </TitleContainer>
      </LoginContainer>
    </Container>
  )
}
