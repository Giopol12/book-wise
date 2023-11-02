import * as Dialog from '@radix-ui/react-dialog'
import { BookOpen, Bookmark, Star, X } from 'phosphor-react'
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

import profileImg from '@/assets/avatar.jpeg'

import { Avatar } from '../Avatar'

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
              <div>
                <p>Categoria</p>
                <strong>Computação, educação</strong>
              </div>
            </BookCardCategory>
            <BookCardCategory>
              <BookOpen size={24} />
              <div>
                <p>Páginas</p>
                <strong>160</strong>
              </div>
            </BookCardCategory>
          </BookCardBottomContainer>
        </BookCard>
        <AssessmentContainer>
          <p>Avaliações</p>
          <AssessmentButton>Avaliar</AssessmentButton>
        </AssessmentContainer>
        <CommentContainer>
          <CommentCard>
            <CommentCardHeader>
              <Avatar size={'md'} avatarUrl={profileImg} />
              <NameContainer></NameContainer>
              <StarTestContainer>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </StarTestContainer>
            </CommentCardHeader>
            <CommentCardContent>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis. Penatibus id vestibulum imperdiet a at imperdiet
                lectus leo. Sit porta eget nec vitae sit vulputate eget
              </p>
            </CommentCardContent>
          </CommentCard>
        </CommentContainer>
      </Content>
    </Dialog.Portal>
  )
}
