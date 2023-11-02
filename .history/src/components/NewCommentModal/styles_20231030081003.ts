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
  minWidth: '36.5rem',
  background: '$gray700',
  padding: '1.5rem 2rem 1rem',
})

export const BookCardTopContainer = styled('div', {
  display: 'flex',
  gap: '2rem',
})

export const BookCardInfoContainer = styled('div', {
  display: 'flex',
})

export const BookCardTitleContainer = styled('div', {})

export const BookCardAssessmentContainer = styled('div', {})

export const BookCardBottomContainer = styled('div', {})

export const BookCardCategory = styled('div', {})

export const AssessmentContainer = styled('div', {})

export const AssessmentButton = styled('div', {})

export const CommentContainer = styled('div', {})

export const CommentCard = styled('div', {})
