import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'absolute',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Container = styled(Dialog.Content, {
  background: '$gray800',
  maxWidth: '48.75rem',
  width: '100%',
  maxHeight: '100vh',
  height: '100%',
  overflowY: 'auto',
  position: 'fixed',
  right: 0,
  top: 0,
})

export const Content = styled('div', {
  maxWidth: '36.5rem',
  width: '100%',
  margin: '1.5rem auto',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
})
export const CloseButton = styled(Dialog.Close, {
  alignSelf: 'flex-end',
  color: '$gray400',
  marginBottom: '1rem',

  background: 'transparent',
  border: 0,
  cursor: 'pointer',

  '&:hover': {
    color: '$gray300',
    transition: 'color 0.2s',
  },
})

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
  height: '15.125rem',
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
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '36.5rem',
  width: '100%',
})

export const AssessmentButton = styled(Dialog.Trigger, {
  border: 0,
  background: 'transparent',
  color: '$purple100',
  fontWeight: '700',
  fontSize: '$md',
  padding: '$1 $2',
  cursor: 'pointer',
  '&:hover': {
    filter: 'brightness(1.1)',
  },
})

export const CommentContainer = styled('div', {
  marginTop: '1rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '$3',
})

export const CommentCard = styled('div', {
  display: 'flex',
  gap: '$5',
  flexDirection: 'column',
  background: '$gray700',
  maxWidth: '36.5rem',
  width: '100%',
  padding: '2rem',
  borderRadius: 8,
})

export const CommentCardHeader = styled('header', {
  display: 'flex',
  gap: '1rem',
})

export const NameContainer = styled('div', {
  flex: 1,
  alignSelf: 'center',
  strong: {
    color: '$gray100',
    lineHeight: '$short',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})

export const CommentCardContent = styled('div', {
  fontSize: '$sm',
  color: '$gray300',
})
export const TextareaContainer = styled('div', {
  position: 'relative',
  // height: '10.25rem',
  // background: '$gray800',
  // resize: 'none',
  // borderRadius: 4,
  // border: '1px solid $gray500',
  // color: '$gray200',
  // fontSize: '$sm',
  // padding: '0.875rem $5',

  textarea: {
    height: '10.25rem',
    width: '100%',
    background: '$gray800',
    resize: 'none',
    borderRadius: 4,
    border: '1px solid $gray500',
    color: '$gray200',
    fontSize: '$sm',
    padding: '0.875rem $5',
    '&:focus-within': {
      border: '1px solid $green200',
    },
    '&::placeholder': {
      color: '$gray400',
    },
  },
})

export const TextCommentCard = styled('form', {
  display: 'flex',
  gap: '$5',
  flexDirection: 'column',
  background: '$gray700',
  maxWidth: '36.5rem',
  width: '100%',
  padding: '2rem',
  borderRadius: 8,
})
export const LettersCount = styled('div', {
  position: 'absolute',
  bottom: 14,
  right: 10,
  color: '#7C7C8A',
  fontSize: '0.75rem',
})

export const AssessmentButtonContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  gap: '$2',
})
export const ActionButton = styled('button', {
  background: '#252D4A',
  border: 0,
  padding: '$2',
  borderRadius: 4,
  lineHeight: 0,
})
