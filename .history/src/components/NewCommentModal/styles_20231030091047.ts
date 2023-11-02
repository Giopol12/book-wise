import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  background: '$gray800',
  minWidth: '48.75rem',
  minHeight: '100vh',
  position: 'fixed',
  right: '0',
  top: 0,
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})
export const CloseButton = styled(Dialog.Close, {})

export const BookCard = styled('div', {
  display: 'flex',
  gap: '2.5rem',
  flexDirection: 'column',
  maxWidth: '36.5rem',
  width: '100%',
  background: '$gray700',
  padding: '1.5rem 2rem 1rem 2rem',
  borderRadius: 10,
})

export const BookCardTopContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
})

export const BookCardInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'space-between',
})

export const BookCardTitleContainer = styled('div', {
  strong: {
    color: '$gray100',
    fontSize: '$lg',
  },
  p: {
    color: '$gray400',
  },
})

export const BookCardAssessmentContainer = styled('div', {
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const BookCardBottomContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  borderTop: '1px solid $gray600',
  padding: '1.5rem 0',
})

export const BookCardCategory = styled('div', {
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  gap: '1rem',
  svg: {
    color: '$green100',
  },
  strong: {
    color: '$gray100',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const AssessmentContainer = styled('div', {
  marginTop: '2.5rem',
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '36.5rem',
  width: '100%',
})

export const AssessmentButton = styled('button', {
  all: 0,
})

export const CommentContainer = styled('div', {})

export const CommentCard = styled('div', {})
