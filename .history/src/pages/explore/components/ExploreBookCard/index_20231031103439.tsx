import { StarTestContainer } from '@/pages/home/components/LatestReviews/styles'
import Image from 'next/image'
import { Star } from 'phosphor-react'
import book from '@/assets/14-habitos-de-desenvolvedores-altamente-produtivos.png'
import {
  DetailsContainer,
  ExploreBookCardContainer,
  ExploreBookTitleContainer,
  ReadSpan,
} from './styles'

export function ExploreBookCard() {
  return (
    <ExploreBookCardContainer>
      <Image src={book} width={108} alt="" />
      <DetailsContainer>
        <ExploreBookTitleContainer>
          <strong>A revolução dos bichos</strong>
          <p>George Orwell</p>
        </ExploreBookTitleContainer>
        <StarTestContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarTestContainer>
      </DetailsContainer>
      <ReadSpan>LIDO</ReadSpan>
    </ExploreBookCardContainer>
  )
}
