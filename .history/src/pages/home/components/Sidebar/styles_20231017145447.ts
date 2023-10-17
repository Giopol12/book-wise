import { styled } from '@/styles'

interface NavItemProps {
  selected: boolean
}

export const SidebarContainer = styled('div', {
  height: 'calc(100vh - 40px)',
  margin: '$5',
  width: '14.5rem',
  background: '$gray700',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})
export const LogoContainer = styled('header', {
  padding: '$10 3.25rem',
})
export const NavContainer = styled('nav', {})
export const NavItemContainer = styled<NavItemProps>('div', {
  selected: {},
})
export const LoginContainer = styled('footer', {})
