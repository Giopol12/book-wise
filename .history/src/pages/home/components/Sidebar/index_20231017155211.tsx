import Image from 'next/image'
import {
  LoginContainer,
  LogoContainer,
  NavContainer,
  NavItemContainer,
  SidebarContainer,
} from './styles'

import logo from '../../../../assets/Logo.png'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'

export function Sidebar() {
  return (
    <SidebarContainer>
      <TopContainer>
        <LogoContainer>
          <Image src={logo} alt="" width={128} height={32} />
        </LogoContainer>
        <NavContainer>
          <NavItemContainer selected={true}>
            <ChartLineUp size={24} />
            <span>Início</span>
          </NavItemContainer>
          <NavItemContainer>
            <Binoculars size={24} />
            <span>Explorar</span>
          </NavItemContainer>
          <NavItemContainer>
            <User size={24} />
            <span>Perfil</span>
          </NavItemContainer>
        </NavContainer>
      </TopContainer>
      <LoginContainer>
        <strong>Fazer login</strong> <SignIn size={20} />
      </LoginContainer>
    </SidebarContainer>
  )
}
