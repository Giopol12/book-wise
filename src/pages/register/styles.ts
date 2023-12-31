import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
  padding: '$5',
})
export const ImgContainer = styled('div', {
  img: {
    width: 'auto',
    height: '95vh',
  },
})

export const LoginContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  margin: '0 auto',
})
export const TitleContainer = styled('div', {
  h1: {
    fontSize: '$2xl',
    lineHeight: 'short',
    color: '$gray100',
  },
  p: {
    lineHeight: 'short',
    color: '$gray200',
  },
  marginBottom: '$10',
})
export const LoginButton = styled('button', {
  border: '0',
  color: '$gray200',
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  background: '$gray600',
  width: '23.25rem',
  borderRadius: 8,

  cursor: 'pointer',
  padding: '$5 $6',
  marginBottom: '$4',
  '&:hover': {
    filter: 'brightness(1.1)',
  },
})
