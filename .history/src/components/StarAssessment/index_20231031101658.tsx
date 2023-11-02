import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'

export function StarRanking() {
  return (
    <StarRankingContainer>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(1)
        }}
      >
        <Star size={28} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(2)
        }}
      >
        <Star size={28} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(3)
        }}
      >
        <Star size={28} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(4)
        }}
      >
        <Star size={28} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(5)
        }}
      >
        <Star size={28} />
      </StarButton>
    </StarRankingContainer>
  )
}
