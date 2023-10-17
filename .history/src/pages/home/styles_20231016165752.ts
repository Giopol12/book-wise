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
  alignItems: 'center',
  flex: 1,
})
export const TitleContainer = styled('div', {
  h1: {
    fontSize: '$2xl',
    lineHeight: '',
    color: '$gray100',
  },
})
export const LoginButton = styled('button', {})
