import { Avatar } from '@/components/Avatar'
import {
  AnalyticsContainer,
  InfoBox,
  InfoContainer,
  RectangleDiv,
  UserInfoContainer,
} from './styles'

import avatar from '@/assets/avatar.jpeg'

import { BookOpen, Bookmark, Books, UserList } from 'phosphor-react'

export function Analytics() {
  return (
    <AnalyticsContainer>
      <UserInfoContainer>
        <Avatar avatarUrl={avatar} size="lg" />
        <h2>Cristofer Rosser</h2>
        <p>membro desde 2019</p>
      </UserInfoContainer>
      <RectangleDiv />
      <InfoContainer>
        <InfoBox>
          <BookOpen size={32} />
          <div>
            <strong>853</strong>
            <p>Páginas lidas</p>
          </div>
        </InfoBox>

        <InfoBox>
          <Books size={32} />
          <div>
            <strong>3</strong>
            <p>Livros avaliados</p>
          </div>
        </InfoBox>

        <InfoBox>
          <UserList size={32} />
          <div>
            <strong>3</strong>
            <p>Autores lidos</p>
          </div>
        </InfoBox>

        <InfoBox>
          <Bookmark size={32} />
          <div>
            <strong>Horror</strong>
            <p>Categoria mais lida</p>
          </div>
        </InfoBox>
      </InfoContainer>
    </AnalyticsContainer>
  )
}
