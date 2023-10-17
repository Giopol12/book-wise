import { styled } from '@/styles'

export const AvatarContainer = styled('div', {
  variants: {
    size: {
      sm: {
        width: 32,
        height: 32,

        img: {
          width: 32,
          height: 32,
        },
      },
      md: {
        width: 32,
        height: 32,

        img: {
          width: 32,
          height: 32,
        },
      },
      lg: {
        width: 32,
        height: 32,

        img: {
          width: 32,
          height: 32,
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
  borderRadius: '$full',
  border: '1px solid #7FD1CC',
  overflow: 'hidden',
})
