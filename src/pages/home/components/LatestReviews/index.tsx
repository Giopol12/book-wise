import { CaretRight, ChartLineUp, Star } from 'phosphor-react'
import {
  CardTitleContainer,
  Container,
  ContentContainer,
  InfoContainer,
  LastReadingCard,
  LastReadingContainer,
  PageTitle,
  StarTestContainer,
  TextContainer,
  TitleContainer,
} from './styles'
import { SeeAllLink } from '../../styles'
import Image from 'next/image'

import bookTest from '@/assets/arquitetura-limpa.png'
import { HomeComment } from '../HomeComment'

export function LatestReviews() {
  return (
    <Container>
      <PageTitle>
        <ChartLineUp size={32} />
        <h1>Início</h1>
      </PageTitle>
      <LastReadingContainer>
        <TitleContainer>
          <p>Sua última leitura</p>
          <SeeAllLink>
            <span>Ver todas</span>
            <CaretRight size={16} />
          </SeeAllLink>
        </TitleContainer>
        <LastReadingCard>
          <Image src={bookTest} width={108} height={152} alt="" />
          <ContentContainer>
            <InfoContainer>
              <p>Há 2 dias</p>
              <StarTestContainer>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </StarTestContainer>
            </InfoContainer>
            <CardTitleContainer>
              <strong>Entendendo Algoritmos</strong>
              <p>Aditya Bhargava</p>
            </CardTitleContainer>
            <TextContainer>
              <p>
                Nec tempor nunc in egestas. Euismod nisi eleifend at et in
                sagittis.
              </p>
            </TextContainer>
          </ContentContainer>
        </LastReadingCard>
      </LastReadingContainer>
      <TitleContainer>
        <p>Avaliações mais recentes</p>
      </TitleContainer>
      <HomeComment />
      <HomeComment />
      <HomeComment />
    </Container>
  )
}
