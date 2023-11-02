import { styled } from '@/styles'

export const AnalyticsContainer = styled('div', {
  marginTop: '9.125rem',
  maxWidth: '19.25rem',
  maxHeight: '34.75rem',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'center',
  borderLeft: '1px solid $gray700',
})
export const UserInfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingBottom: '$2',
  h2: {
    marginTop: '$5',
    color: '$gray100',
    fontSize: '$xl',
  },
  p: {
    color: '$gray400',
    fontSize: '$sm',
  },
})
export const RectangleDiv = styled('div', {
  width: 32,
  height: 4,
  background: '$gradient-horizontal',
  borderRadius: 9999,
  margin: '$8 0',
})
export const InfoContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
  padding: '$5 3.5rem',
})
export const InfoBox = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',
  strong: {
    color: '$gray200',
  },
  p: {
    fontSize: '$sm',
  },
  svg: {
    color: '$green100',
  },
})
