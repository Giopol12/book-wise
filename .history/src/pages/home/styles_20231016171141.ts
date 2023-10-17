import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '1440px',
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
  alignItems: 'center',
  flex: 1,
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
  background: '$gray600',

  padding: '$5 $6',
  marginBottom: '$4',
})
