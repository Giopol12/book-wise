import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'

export function StarRanking() {
  return (
    <StarRankingContainer>
      <StarButton type="button">
        <Star size={28} />
      </StarButton>
      <StarButton type="button">
        <Star size={28} />
      </StarButton>
      <StarButton type="button">
        <Star size={28} />
      </StarButton>
      <StarButton type="button">
        <Star size={28} />
      </StarButton>
      <StarButton type="button">
        <Star size={28} />
      </StarButton>
    </StarRankingContainer>
  )
}
