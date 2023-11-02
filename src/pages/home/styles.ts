import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '1440px',
  margin: '0 auto',
  display: 'flex',
})
export const HomeContainer = styled('main', {})

export const SeeAllLink = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',
  color: '$purple100',
  fontWeight: '700',
  padding: '$2',
  borderRadius: '4px',
  span: {
    fontSize: '$sm',
  },
  '&:hover': {
    cursor: 'pointer',
    background: 'rgba(131, 129, 217, 0.1)',
  },
})
