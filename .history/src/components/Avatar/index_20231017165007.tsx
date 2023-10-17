import Image, { StaticImageData } from 'next/image'
import { AvatarContainer } from './styles'

interface AvatarProps {
  avatarUrl: string | StaticImageData
}

export function Avatar({ avatarUrl }: AvatarProps) {
  return (
    <AvatarContainer>
      <Image src={avatarUrl} width={72} height={72} alt="" quality={100} />
    </AvatarContainer>
  )
}
