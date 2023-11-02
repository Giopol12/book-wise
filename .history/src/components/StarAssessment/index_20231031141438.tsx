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
  function handleStarHoverOver(n: number) {
    setValueStarHover(n)
  }
  function handleStarHoverOut() {
    setValueStarHover(0)
  }
  return (
    <StarRankingContainer>
      <StarButton
        isHover={(valueStarHover >= 1) & (!assessmentValue < valueStarHover) = true}
        type="button"
        onClick={() => {
          handleAssessment(1)
        }}
        onMouseOver={() => {
          handleStarHoverOver(1)
        }}
        onMouseOut={handleStarHoverOut}
      >
        <Star
          size={28}
          weight={
            assessmentValue >= 1 || valueStarHover >= 1 ? 'fill' : 'regular'
          }
        />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 2}
        type="button"
        onClick={() => {
          handleAssessment(2)
        }}
        onMouseOver={() => {
          handleStarHoverOver(2)
        }}
        onMouseOut={handleStarHoverOut}
      >
        <Star
          size={28}
          weight={
            assessmentValue >= 2 || valueStarHover >= 2 ? 'fill' : 'regular'
          }
        />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 3}
        type="button"
        onClick={() => {
          handleAssessment(3)
        }}
        onMouseOver={() => {
          handleStarHoverOver(3)
        }}
        onMouseOut={handleStarHoverOut}
      >
        <Star
          size={28}
          weight={
            assessmentValue >= 3 || valueStarHover >= 3 ? 'fill' : 'regular'
          }
        />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 4}
        type="button"
        onClick={() => {
          handleAssessment(4)
        }}
        onMouseOver={() => {
          handleStarHoverOver(4)
        }}
        onMouseOut={handleStarHoverOut}
      >
        <Star
          size={28}
          weight={
            assessmentValue >= 4 || valueStarHover >= 4 ? 'fill' : 'regular'
          }
        />
      </StarButton>
      <StarButton
        isHover={valueStarHover >= 5}
        type="button"
        onClick={() => {
          handleAssessment(5)
        }}
        onMouseOver={() => {
          handleStarHoverOver(5)
        }}
        onMouseOut={handleStarHoverOut}
      >
        <Star
          size={28}
          weight={
            assessmentValue >= 5 || valueStarHover >= 5 ? 'fill' : 'regular'
          }
        />
      </StarButton>
    </StarRankingContainer>
  )
}
