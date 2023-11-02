import { styled } from '@/styles'

export const MyBooksContainer = styled('div', {
  margin: '4.5rem 4rem 3rem 4.75rem',
  maxWidth: 642,
  flex: 1,
})

export const PageTitle = styled('div', {
  display: 'flex',
  alignContent: 'center',
  gap: '$3',
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },
})

export const SearchInputContainer = styled('div', {
  position: 'relative',
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
export const SearchInput = styled('input', {
  marginTop: '2.75rem',
  padding: '0.875rem 2.875rem 0.875rem $5',
  width: '100%',
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

export const ProfileBookContainer = styled('div', {
  marginTop: '$8',
  display: 'flex',
  flexDirection: 'column',
  gap: '$6',
})
