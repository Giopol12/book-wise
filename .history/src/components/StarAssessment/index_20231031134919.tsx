import { Star } from 'phosphor-react'
import { StarButton, StarRankingContainer } from './styles'
import { useState } from 'react'

export function StarRanking() {
  const [assessmentValue, setAssessmentValue] = useState(0)
  const [valueStarHover, setValueStarHover] = useState(0)
  function handleAssessment(n: number) {
    setAssessmentValue((state) => {
      if (state === n) {
        return 0
      }
      return n
    })
  }
  function handleStarHover(n: number) {
    setValueStarHover(n)
  }
  return (
    <StarRankingContainer>
      <StarButton
        isHover={valueStarHover >= 1}
        type="button"
        onClick={() => {
          handleAssessment(1)
        }}
        onMouseOver={(e) => {
          handleStarHover(1)
        }}
      >
        <Star size={28} weight={assessmentValue >= 1 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 2}
        type="button"
        onClick={() => {
          handleAssessment(2)
        }}
        onMouseOver={() => {
          handleStarHover(2)
        }}
      >
        <Star size={28} weight={assessmentValue >= 2 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 3}
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
        isHover={valueStarHover >= 4}
        type="button"
        onClick={() => {
          handleAssessment(4)
        }}
        onMouseOver={() => {
          handleStarHover(4)
        }}
      >
        <Star size={28} weight={assessmentValue >= 4 ? 'fill' : 'regular'} />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 5}
        type="button"
        onClick={() => {
          handleAssessment(5)
        }}
        onMouseOver={() => {
          handleStarHover(5)
        }}
      >
        <Star size={28} weight={assessmentValue >= 5 ? 'fill' : 'regular'} />
      </StarButton>
    </StarRankingContainer>
  )
}
