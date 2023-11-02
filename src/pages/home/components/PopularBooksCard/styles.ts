import { styled } from '@/styles'

export const PopularBooksCardContainer = styled('div', {
  display: 'flex',
  padding: '$4 $5',
  borderRadius: 8,
  gap: '$5',
  background: '$gray700',
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})

export const ContentContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'space-between',
})
export const TitleContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },
  p: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
