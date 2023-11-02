import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const ExploreBookCardContainer = styled(Dialog.Trigger, {
  position: 'relative',
  maxWidth: '20rem',
  background: '$gray700',
  display: 'flex',
  gap: '$5',
  padding: '$5 $4',
  borderRadius: 8,
  border: '2px solid transparent',
  '&:hover': {
    border: '2px solid $gray600',
    cursor: 'pointer',
    span: {
      borderRight: '2px solid $gray600',
      borderTop: '2px solid $gray600',
    },
  },
})
export const DetailsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  background: 'red',
  flex: 1,
  justifyContent: 'space-between',
})
export const ExploreBookTitleContainer = styled('div', {
  strong: {
    color: '$gray100',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
export const ReadSpan = styled('span', {
  position: 'absolute',
  background: 'red',
  top: -2,
  right: -2,
  color: '$green100',
  fontWeight: 'bold',
  background: '$green300',
  borderRadius: '0 6px 0 8px',
  padding: '2px 10px',
  borderRight: '2px solid $green300',
  borderTop: '2px solid $green300',
})
