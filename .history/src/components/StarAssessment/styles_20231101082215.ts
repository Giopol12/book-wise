import { styled } from '@/styles'

export const StarRankingContainer = styled('div', {
  display: 'flex',
})
export const StarButton = styled('button', {
  variants: {
    isHover: {
      true: {
        color: '$purple100',
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
    color: 'rgba(131, 129, 217,02)',
    transition: 'color 0.1s',
  },
})
