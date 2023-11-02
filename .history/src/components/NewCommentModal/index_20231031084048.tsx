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
  CommentCardContent,
  CommentCardHeader,
  CommentContainer,
  Container,
  Content,
  LettersCount,
  NameContainer,
  Overlay,
  TextCommentCard,
  TextareaContainer,
} from './styles'
import Image from 'next/image'
import { StarTestContainer } from '@/pages/home/components/LatestReviews/styles'

import book from '@/assets/14-habitos-de-desenvolvedores-altamente-produtivos.png'

import profileImg from '@/assets/avatar.jpeg'

import { Avatar } from '../Avatar'
import { ChangeEvent, useState } from 'react'

export function NewCommentModal() {
  const [lettersCountText, setLettersCountText] = useState('')

  function handleIncreaseLettersCount(e: ChangeEvent<HTMLInputElement>) {
    setLettersCountText(e.target.value)
  }
  const lettersCount = lettersCountText.length
  return (
    <Dialog.Portal>
      <Overlay />
      <Container>
        <Content>
          <CloseButton>
            <X size={24} />
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
            <TextCommentCard>
              <CommentCardHeader>
                <Avatar size={'md'} avatarUrl={profileImg} />
                <NameContainer>
                  <strong>Brandon Botosh</strong>
                </NameContainer>
                <StarTestContainer>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                </StarTestContainer>
              </CommentCardHeader>
              <TextareaContainer>
                <LettersCount>
                  <p>
                    <span>{lettersCount}</span>/450
                  </p>
                </LettersCount>
                <textarea
                  onChange={handleIncreaseLettersCount}
                  maxLength={450}
                  placeholder="Escreva sua avaliação"
                />
              </TextareaContainer>
            </TextCommentCard>
            <CommentCard>
              <CommentCardHeader>
                <Avatar size={'md'} avatarUrl={profileImg} />
                <NameContainer>
                  <strong>Brandon Botosh</strong>
                  <p>Há 2 dias</p>
                </NameContainer>
                <StarTestContainer>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
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
            <CommentCard>
              <CommentCardHeader>
                <Avatar size={'md'} avatarUrl={profileImg} />
                <NameContainer>
                  <strong>Brandon Botosh</strong>
                  <p>Há 2 dias</p>
                </NameContainer>
                <StarTestContainer>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
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
            <CommentCard>
              <CommentCardHeader>
                <Avatar size={'md'} avatarUrl={profileImg} />
                <NameContainer>
                  <strong>Brandon Botosh</strong>
                  <p>Há 2 dias</p>
                </NameContainer>
                <StarTestContainer>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
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
            <CommentCard>
              <CommentCardHeader>
                <Avatar size={'md'} avatarUrl={profileImg} />
                <NameContainer>
                  <strong>Brandon Botosh</strong>
                  <p>Há 2 dias</p>
                </NameContainer>
                <StarTestContainer>
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
                  <Star size={16} />
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
      </Container>
    </Dialog.Portal>
  )
}
