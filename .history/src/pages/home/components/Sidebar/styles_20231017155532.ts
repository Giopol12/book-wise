import { styled } from '@/styles'

export const SidebarContainer = styled('div', {
  height: 'calc(100vh - 40px)',
  margin: '$5',
  width: '14.5rem',
  background: '$gray700',
  borderRadius: '12px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
})
export const TopContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'flex-start',
})
export const LogoContainer = styled('header', {
  padding: '$10 3.25rem',
})
export const NavContainer = styled('nav', {
  marginTop: '$6',
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})
export const NavItemContainer = styled('div', {
  variants: {
    selected: {
      true: {
        color: '$gray100',
        fontWeight: '$bold',
        borderLeftColor: '$green100',
      },
    },
  },
  defaultVariants: {
    selected: false,
  },
  color: '$gray400',
  lineHeight: 'base',
  display: 'flex',
  gap: '$3',
  padding: '0 $3',
  borderLeftWidth: '3px',
  borderLeftColor: 'transparent',
  borderLeftStyle: 'solid',
})
export const LoginContainer = styled('footer', {})
