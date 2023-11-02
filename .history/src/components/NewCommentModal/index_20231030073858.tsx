import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import {
  AssessmentButton,
  AssessmentContainer,
  BookCard,
  CloseButton,
  CommentCard,
  CommentContainer,
  Content,
  Overlay,
} from './styles'

export function NewCommentModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h1>OIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII</h1>
        <CloseButton>
          <X />
        </CloseButton>
        <BookCard></BookCard>
        <AssessmentContainer>
          <p>Avaliações</p>
          <AssessmentButton></AssessmentButton>
        </AssessmentContainer>
        <CommentContainer>
          <CommentCard></CommentCard>
        </CommentContainer>
      </Content>
    </Dialog.Portal>
  )
}
