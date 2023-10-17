import Image from 'next/image'
import {
  LoginContainer,
  LogoContainer,
  NavContainer,
  NavItemContainer,
  SidebarContainer,
} from './styles'

import logo from '../../../../assets/Logo.png'
import { Binoculars, ChartLineUp, User } from 'phosphor-react'

export function Sidebar() {
  return (
    <SidebarContainer>
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
      <LoginContainer>
        <strong>Fazer login</strong> <SignIn />
      </LoginContainer>
    </SidebarContainer>
  )
}
