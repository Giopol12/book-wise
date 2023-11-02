import { styled } from '@/styles'

export const StarRankingContainer = styled('div', {
  display: 'flex',
})
export const StarButton = styled('button', {
  variants: {
    isHover: {
      true: {
        color: 'black',
      },
    },
  },
  defaultVariants: {
    isHover: true,
  },
  border: 0,
  lineHeight: 0,
  backgroundColor: 'transparent',
  color: '$purple100',
  cursor: 'pointer',
  '&:hover': {
    color: 'black',
    transition: 'color 0.1s',
  },
})
