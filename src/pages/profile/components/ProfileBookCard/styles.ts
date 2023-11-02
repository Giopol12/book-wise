import { styled } from '@/styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  'p:first-child': {
    fontSize: '$sm',
  },
})

export const BookCard = styled('div', {
  marginTop: '$2',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
  padding: '$6',
  background: '$gray700',
  borderRadius: 8,
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})
export const TopContainer = styled('div', {
  display: 'flex',
  gap: '$6',
})
export const BottomContainer = styled('div', {})
export const InfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  flexDirection: 'column',
})
export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: 2,
  strong: {
    color: '$gray100',
    fontSize: '$lg',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
