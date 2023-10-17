import Image from 'next/image'
import {
  LoginContainer,
  LogoContainer,
  NavContainer,
  SidebarContainer,
} from './styles'

import logo from '../../../../assets/Logo.png'

export function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Image src={logo} />
      </LogoContainer>
      <NavContainer></NavContainer>
      <LoginContainer></LoginContainer>
    </SidebarContainer>
  )
}
