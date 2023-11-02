import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
})

export const ExploreContainer = styled('div', {
  maxWidth: '62.25rem',
  margin: '4.5rem 0 2.5rem 6rem',
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
})
export const ExploreHeader = styled('div', {
  width: '100%',
  maxHeight: '3rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})
export const PageTitle = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
  marginBottom: '3$',
  svg: {
    color: '$green100',
  },
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },
})
export const ExploreSearchInputContainer = styled('div', {
  position: 'relative',
  maxHeight: '5.75rem',
  svg: {
    color: '$gray500',
    position: 'absolute',
    bottom: 14,
    right: 20,
  },
  '&:focus-within': {
    svg: {
      color: '$green200',
    },
  },
})
export const ExploreSearchInput = styled('input', {
  width: '27rem',
  position: 'relative',
  padding: '0.875rem 2.875rem 0.875rem $5',
  backgroundColor: '$gray800',
  border: '1px solid $gray500',
  borderRadius: '8px',
  color: '$gray200',
  '&:focus': {
    borderColor: '$green200',
  },
  '&::placeholder': {
    color: '$gray400',
  },
})
export const TagsContainer = styled('div', {
  marginTop: '$10',

  display: 'flex',
  gap: '$3',
})
export const Tag = styled('span', {
  variants: {
    enabled: {
      true: {
        border: '1px solid $purple200',
        background: '$purple200',
        color: '$gray100',
        '&:hover': {
          borderColor: '$purple100',
        },
      },
      false: {
        color: '$purple100',
        border: '1px solid $purple100',
        '&:hover': {
          background: 'rgba(42, 40, 121, 0.3)',
        },
      },
    },
  },
  defaultVariants: {
    enabled: false,
  },
  borderRadius: 9999,
  padding: '$1 $4',
  cursor: 'pointer',
})
export const ExploreBookContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  marginTop: '3rem',
  gap: '$5',
})
