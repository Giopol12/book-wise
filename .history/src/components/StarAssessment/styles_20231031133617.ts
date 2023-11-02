import { styled } from '@/styles'

export const StarRankingContainer = styled('div', {
  display: 'flex',
  gap: 2,
})
export const StarButton = styled('button', {
  variants: {
    isHover: {
      true: {
        '&:hover': {
          color: 'black',
        },
      },
    },
  },

  border: 0,
  lineHeight: 0,
  backgroundColor: 'transparent',
  color: '$purple100',
  cursor: 'pointer',
})
