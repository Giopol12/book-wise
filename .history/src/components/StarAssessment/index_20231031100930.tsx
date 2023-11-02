import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'

export function StarRanking() {
  return (
    <StarRankingContainer>
      <StarButton>
        <Star size={28} />
      </StarButton>
      <StarButton>
        <Star size={28} />
      </StarButton>
      <StarButton>
        <Star size={28} />
      </StarButton>
      <StarButton>
        <Star size={28} />
      </StarButton>
      <StarButton>
        <Star size={28} />
      </StarButton>
    </StarRankingContainer>
  )
}
