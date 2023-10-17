import Image from 'next/image'
import {
  LoginContainer,
  LogoContainer,
  NavContainer,
  NavItemContainer,
  SidebarContainer,
} from './styles'

import logo from '../../../../assets/Logo.png'
import { ChartLineUp } from 'phosphor-react'

export function Sidebar() {
  return (
    <SidebarContainer>
      <LogoContainer>
        <Image src={logo} alt="" width={128} height={32} />
      </LogoContainer>
      <NavContainer>
        <NavItemContainer>
          <p>
            <ChartLineUp />
            Ínicio
          </p>
        </NavItemContainer>
      </NavContainer>
      <LoginContainer></LoginContainer>
    </SidebarContainer>
  )
}
