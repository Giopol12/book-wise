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
  '&:hover': {
    cursor: 'pointer',
    color: '$gray100',
    transition: 'color 0.1s',
  },
})
export const BottomContainer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3.375rem',
  gap: '$3',
})

export const LoginButton = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  color: '$gray200',
  svg: {
    color: '$green100',
  },
  cursor: 'pointer',
})
export const SignOutButton = styled('button', {
  border: 0,
  backgroundColor: 'transparent',
  color: '$red300',
  lineHeight: 0,
  cursor: 'pointer',
  '&:hover': {
    color: '$red500',
    transition: 'color 0.1s',
  },
})
