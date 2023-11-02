import { StarTestContainer } from '@/pages/home/components/LatestReviews/styles'
import Image from 'next/image'
import {
  BookCard,
  BottomContainer,
  Container,
  InfoContainer,
  TitleContainer,
  TopContainer,
} from './styles'
import { Star } from 'phosphor-react'
import book from '@/assets/fragmentos-do-horror.png'

export function ProfileBookCard() {
  return (
    <Container>
      <p>Há 2 dias</p>
      <BookCard>
        <TopContainer>
          <Image src={book} width={98} alt="" />
          <InfoContainer>
            <TitleContainer>
              <strong>Entendendo Algoritmos</strong>
              <p>Aditya Bhargava</p>
            </TitleContainer>
            <StarTestContainer>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </StarTestContainer>
          </InfoContainer>
        </TopContainer>

        <BottomContainer>
          <p>
            Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
            non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
            suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
            tristique pretium quam. Mollis et luctus amet sed convallis varius
            massa sagittis. Proin sed proin at leo quis ac sem. Nam donec
            accumsan curabitur amet tortor quam sit. Bibendum enim sit dui lorem
            urna amet elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam
            amet integer pellentesque.
          </p>
        </BottomContainer>
      </BookCard>
    </Container>
  )
}
