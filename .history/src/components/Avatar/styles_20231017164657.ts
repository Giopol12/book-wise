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
      md: {},
      lg: {},
    },
  },
  defaultVariants: {
    size: 'sm',
  },
  borderRadius: '$full',
  border: '1px solid #7FD1CC',
  overflow: 'hiden',
})