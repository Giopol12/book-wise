import { Icon } from '@iconify/react'
import {
  Container,
  ImgContainer,
  LoginButton,
  LoginContainer,
  TitleContainer,
} from './styles'
import Image from 'next/image'

import { signIn } from 'next-auth/react'

import loginImage from '../../assets/login-image.png'

export default function Register() {
  return (
    <Container>
      <ImgContainer>
        <Image src={loginImage} width={598} height={912} alt="" quality={100} />
      </ImgContainer>

      <LoginContainer>
        <TitleContainer>
          <h1>Boas vindas!</h1>
          <p>Faça seu login ou acesse como visitante.</p>
        </TitleContainer>

        <LoginButton onClick={() => signIn()}>
          <Icon icon="flat-color-icons:google" width="32" height="32" />
          <p>Entrar com Google</p>
        </LoginButton>
        <LoginButton>
          <Icon icon="bytesize:github" width="32" height="32" />
          <p>Entrar com GitHub</p>
        </LoginButton>
        <LoginButton>
          <Icon icon="carbon:rocket" color="#8381d9" width="32" height="32" />
          <p>Acessar como visitante</p>
        </LoginButton>
      </LoginContainer>
    </Container>
  )
}
