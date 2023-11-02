import { CaretRight } from 'phosphor-react'
import { SeeAllLink } from '../../styles'
import { Container, PopularBooksContainer, TitleContainer } from './styles'
import { PopularBooksCard } from '../PopularBooksCard'

export function PopularBooks() {
  return (
    <Container>
      <TitleContainer>
        <p>Livros populares</p>
        <SeeAllLink>
          <span>Ver todos</span>
          <CaretRight />
        </SeeAllLink>
      </TitleContainer>
      <PopularBooksContainer>
        <PopularBooksCard />
        <PopularBooksCard />
        <PopularBooksCard />
        <PopularBooksCard />
        <PopularBooksCard />
      </PopularBooksContainer>
    </Container>
  )
}
