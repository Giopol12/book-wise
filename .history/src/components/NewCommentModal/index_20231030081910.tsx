import * as Dialog from '@radix-ui/react-dialog'
import { Bookmark, Star, X } from 'phosphor-react'
import {
  AssessmentButton,
  AssessmentContainer,
  BookCard,
  BookCardAssessmentContainer,
  BookCardBottomContainer,
  BookCardCategory,
  BookCardInfoContainer,
  BookCardTitleContainer,
  BookCardTopContainer,
  CloseButton,
  CommentCard,
  CommentContainer,
  Content,
  Overlay,
} from './styles'
import Image from 'next/image'
import { StarTestContainer } from '@/pages/home/components/LatestReviews/styles'

import book from '@/assets/14-habitos-de-desenvolvedores-altamente-produtivos.png'

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
          <BookCardTopContainer>
            <Image src={book} width={172} alt="" />
            <BookCardInfoContainer>
              <BookCardTitleContainer>
                <strong>
                  14 Hábitos de Desenvolvedores Altamente Produtivos
                </strong>
                <p>Zeno Rocha</p>
              </BookCardTitleContainer>
              <BookCardAssessmentContainer>
                <StarTestContainer>
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </StarTestContainer>
                <p>
                  <span>3</span> avaliações
                </p>
              </BookCardAssessmentContainer>
            </BookCardInfoContainer>
          </BookCardTopContainer>
          <BookCardBottomContainer>
            <BookCardCategory>
              <Bookmark size={24} />
            </BookCardCategory>
            <BookCardCategory></BookCardCategory>
          </BookCardBottomContainer>
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
