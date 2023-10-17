import Image from 'next/image'
import {
  LoginButton,
  LogoContainer,
  NavContainer,
  NavItemContainer,
  SidebarContainer,
  TopContainer,
} from './styles'

import logo from '../../../../assets/Logo.png'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { Avatar } from '@/components/Avatar'
import avatar from '../../../../assets/Avatar.png'

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
      <LoginButton>
        {/* <strong>Fazer login</strong> <SignIn size={20} /> */}
        <Avatar avatarUrl="avatar" />
      </LoginButton>
    </SidebarContainer>
  )
}
