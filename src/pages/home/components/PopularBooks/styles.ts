import { styled } from '@/styles'

export const Container = styled('div', {
  marginTop: '9.125rem',
  maxWidth: '20.25rem',
  width: '100%',
})

export const TitleContainer = styled('div', {
  p: {
    marginTop: '$1',
    lineHeight: '$base',
  },
  padding: '$1 0',
  display: 'flex',
  justifyContent: 'space-between',
})

export const PopularBooksContainer = styled('div', {
  marginTop: '$1',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})
