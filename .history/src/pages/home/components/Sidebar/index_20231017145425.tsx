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
          <ChartLineUp />
          <span>Início</span>
        </NavItemContainer>
        <NavItemContainer>
          <Binoculars />
          <span>Explorar</span>
        </NavItemContainer>
        <NavItemContainer>
          <User />
          <span>Perfil</span>
        </NavItemContainer>
      </NavContainer>
      <LoginContainer></LoginContainer>
    </SidebarContainer>
  )
}
