import { styled } from '@/styles'

export const HomeCommentContainer = styled('div', {
  marginTop: '$2',
  marginBottom: '$3',
  background: '$gray700',
  display: 'flex',
  flexDirection: 'column',
  padding: '$6',
  gap: '$8',
  borderRadius: 8,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  img: {
    borderRadius: 4,
  },
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
  },
})
export const HeaderConatiner = styled('header', {
  display: 'flex',
  gap: '$4',
})
export const NameContainer = styled('div', {
  flex: 1,
  p: {
    color: '$gray100',
  },
  span: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
export const ContentContainer = styled('div', {
  display: 'flex',
  gap: '$5',
})
export const ContentTextContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },
  p: {
    fontSize: '$sm',
    color: '$gray400',
  },
})
export const TextContainer = styled('div', {
  maxHeight: '5rem',
  overflow: 'hidden',
  p: {
    fontSize: '$sm',
    color: '$gray300',
  },
})
