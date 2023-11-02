import { Avatar } from '@/components/Avatar'
import {
  ContentContainer,
  ContentTextContainer,
  HeaderConatiner,
  HomeCommentContainer,
  NameContainer,
  TextContainer,
} from './styles'
import Image from 'next/image'
import { StarTestContainer } from '../LatestReviews/styles'
import { Star } from 'phosphor-react'
import avatar from '@/assets/avatar.jpeg'
import book from '@/assets/arquitetura-limpa.png'

export function HomeComment() {
  return (
    <HomeCommentContainer>
      <HeaderConatiner>
        <Avatar avatarUrl={avatar} />
        <NameContainer>
          <p>Jaxson Dias</p>
          <span>Hoje</span>
        </NameContainer>
        <StarTestContainer>
          <Star />
          <Star />
          <Star />
          <Star />
          <Star />
        </StarTestContainer>
      </HeaderConatiner>
      <ContentContainer>
        <Image src={book} width={108} height={152} alt="" />
        <ContentTextContainer>
          <div>
            <strong>O Hobbit</strong>
            <p>Aditya Bhargava</p>
          </div>
          <TextContainer>
            <p>
              Semper et sapien proin vitae nisi. Feugiat neque integer donec et
              aenean posuere amet ultrices. Cras fermentum id pulvinar varius
              leo a in. Amet libero pharetra nunc elementum fringilla velit
              ipsum. Sed vulputate massa velit nibh... ver mais Semper et sapien
              proin vitae nisi. Feugiat neque integer donec et aenean posuere
              amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet
              libero pharetra nunc elementum fringilla velit ipsum. Sed
              vulputate massa velit nibh... ver mais
            </p>
          </TextContainer>
        </ContentTextContainer>
      </ContentContainer>
    </HomeCommentContainer>
  )
}
