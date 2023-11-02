import Image from 'next/image'
import {
  ContentContainer,
  PopularBooksCardContainer,
  TitleContainer,
} from './styles'
import book from '@/assets/codigo-limpo.png'
import { StarTestContainer } from '../LatestReviews/styles'
import { Star } from 'phosphor-react'

export function PopularBooksCard() {
  return (
    <PopularBooksCardContainer>
      <Image src={book} width={64} alt="" />
      <ContentContainer>
        <TitleContainer>
          <strong>A revolução dos bichos</strong>
          <p>George Orwell</p>
        </TitleContainer>
        <StarTestContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarTestContainer>
      </ContentContainer>
    </PopularBooksCardContainer>
  )
}
