import { styled } from '@/styles'

export const AvatarContainer = styled('div', {
  variants: {
    size: {
      sm: {
        img: {
          width: 32,
          height: 32,
          borderRadius: '$full',
        },
      },
      md: {
        img: {
          width: 40,
          height: 40,
          borderRadius: '$full',
        },
      },
      lg: {
        img: {
          width: 72,
          height: 72,
          borderRadius: '$full',
        },
      },
    },
  },
  defaultVariants: {
    size: 'sm',
  },
  borderRadius: '$full',
  border: '1px solid #7FD1CC',
})
