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
        width: 40,
        height: 40,

        img: {
          width: 40,
          height: 40,
        },
      },
      lg: {
        width: 72,
        height: 72,

        img: {
          width: 72,
          height: 72,
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
