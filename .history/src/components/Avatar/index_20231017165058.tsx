import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string | StaticImageData
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({ avatarUrl, size }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={avatarUrl} width={72} height={72} alt="" quality={100} />
    </AvatarContainer>
  )
}
