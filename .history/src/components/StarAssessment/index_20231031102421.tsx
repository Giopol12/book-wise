import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'
import { useState } from 'react'

export function StarRanking() {
  const [assessmentValue, setAssessmentValue] = useState(0)
  function handleAssessment(n: number) {
    setAssessmentValue(n)
  }
  return (
    <StarRankingContainer>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(1)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(3)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(4)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        type="button"
        onClick={() => {
          handleAssessment(5)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
    </StarRankingContainer>
  )
}
