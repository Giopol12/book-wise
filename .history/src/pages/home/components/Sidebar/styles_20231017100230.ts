import { styled } from '@/styles'

export const SidebarContainer = styled('div', {
  height: 'calc(100vh - 40px)',
  margin: '$5',
  width: '14.5rem',
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #141e30, #243b55); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #141e30, #243b55); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ *
  borderRadius: '12px',
})
export const LogoContainer = styled('header', {})
export const NavContainer = styled('div', {})
export const LoginContainer = styled('footer', {})
