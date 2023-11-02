import * as Dialog from '@radix-ui/react-dialog'
import { Star, X } from 'phosphor-react'
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
import Image from 'next/image'
import { StarTestContainer } from '@/pages/home/components/LatestReviews/styles'

export function NewCommentModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <h1></h1>
        <CloseButton>
          <X />
        </CloseButton>
        <BookCard>
          <Image />
          <BookCardInfoContainer>
            <BookCardTitleContainer></BookCardTitleContainer>
            <BookCardAssessmentContainer>
              <StarTestContainer>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </StarTestContainer>
            </BookCardAssessmentContainer>
          </BookCardInfoContainer>
        </BookCard>
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
