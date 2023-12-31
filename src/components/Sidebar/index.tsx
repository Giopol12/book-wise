import Image from 'next/image'
import {
  BottomContainer,
  LoginButton,
  LogoContainer,
  NavContainer,
  NavItemContainer,
  SidebarContainer,
  SignOutButton,
  TopContainer,
} from './styles'

import logo from '@/assets/logo.png'
import avatar from '@/assets/avatar.jpeg'
import { Binoculars, ChartLineUp, SignIn, User } from 'phosphor-react'
import { Avatar } from '@/components/Avatar'

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
      <BottomContainer>
        <LoginButton>
          {/* <strong>Fazer login</strong> <SignIn size={20} /> */}
          <Avatar avatarUrl={avatar} /> <span>Giopol</span>
        </LoginButton>
        <SignOutButton>
          <SignIn size={20} />
        </SignOutButton>
      </BottomContainer>
    </SidebarContainer>
  )
}
