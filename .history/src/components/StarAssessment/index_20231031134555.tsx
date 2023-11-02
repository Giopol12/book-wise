import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'
import { useState } from 'react'

export function StarRanking() {
  const [assessmentValue, setAssessmentValue] = useState(0)
  function handleAssessment(n: number) {
    setAssessmentValue((state) => {
      if (state === n) {
        return 0
      }
      return n
    })
  }
  function handleStarHover(n: number) {
    setAssessmentValue
  }
  return (
    <StarRankingContainer>
      <StarButton
        isHover={assessmentValue >= 1}
        type="button"
        onClick={() => {
          handleAssessment(1)
        }}
        onMouseOver={(e) => {
          handleStarHover(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={assessmentValue >= 2}
        type="button"
        onClick={() => {
          handleAssessment(2)
        }}
        onMouseOver={(e) => {
          handleStarHover(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 2 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={assessmentValue >= 3}
        type="button"
        onClick={() => {
          handleAssessment(3)
        }}
        onMouseOver={() => {
          handleStarHover(3)
        }}
      >
        <Star size={28} weight={assessmentValue >= 3 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={assessmentValue >= 4}
        type="button"
        onClick={() => {
          handleAssessment(4)
        }}
        onMouseOver={() => {
          handleStarHover(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 4 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={assessmentValue >= 5}
        type="button"
        onClick={() => {
          handleAssessment(5)
        }}
        onMouseOver={() => {
          handleStarHover(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 5 ? 'fill' : 'regular'} />
      </StarButton>
    </StarRankingContainer>
  )
}
