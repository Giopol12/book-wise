import Image from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string
}

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image />
    </AvatarContainer>
  )
}
