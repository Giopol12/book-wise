import { styled } from '@/styles'

export const Container = styled('div', {
  maxWidth: '37.875rem',
  width: '100%',
  margin: '4.75rem 4rem 0 4.5rem',
  wordWrap: 'break-word',
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
export const LastReadingContainer = styled('div', {})

export const TitleContainer = styled('div', {
  p: {
    color: '$gray100',
    padding: '$2 0',
  },
  marginTop: '$10',
  display: 'flex',
  justifyContent: 'space-between',
})

export const LastReadingCard = styled('div', {
  marginTop: '$2',
  background: '$gray600',
  maxHeight: 192,
  display: 'flex',
  padding: '$5 1.5rem',
  gap: '1.5rem',
  borderRadius: 8,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  img: {
    borderRadius: 4,
  },
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid $gray500',
    cursor: 'pointer',
  },
})

export const ContentContainer = styled('div', {})

export const InfoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  p: {
    fontSize: '$sm',
  },
})

export const CardTitleContainer = styled('div', {
  marginTop: '$3',

  strong: {
    lineHeight: '$short',
    color: '$gray100',
  },
  p: {
    fontSize: '$sm',
    color: '$gray400',
  },
})

export const TextContainer = styled('div', {
  marginTop: '$6',
  maxHeight: '2.75rem',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  wordBreak: 'break-word',
  p: {
    fontSize: '$sm',
  },
})

export const StarTestContainer = styled('div', {
  display: 'flex',
  gap: '$1',
  svg: {
    color: '$purple100',
  },
})
