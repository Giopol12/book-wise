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
})
export const CloseButton = styled(Dialog.Close, {})
export const BookCard = styled('div', {})
export const AssessmentContainer = styled('div', {})
export const AssessmentButton = styled('div', {})
export const CommentContainer = styled('div', {})
export const CommentCard = styled('div', {})
