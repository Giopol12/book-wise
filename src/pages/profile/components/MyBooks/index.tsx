import { MagnifyingGlass, User } from 'phosphor-react'
import {
  MyBooksContainer,
  PageTitle,
  ProfileBookContainer,
  SearchInput,
  SearchInputContainer,
} from './styles'
import { ProfileBookCard } from '../ProfileBookCard'

export function MyBooks() {
  return (
    <MyBooksContainer>
      <PageTitle>
        <User color="#50B2C0" size={32} />
        <h1>Perfil</h1>
      </PageTitle>
      <SearchInputContainer>
        <MagnifyingGlass size={20} />
        <SearchInput placeholder="Buscar livro avaliado" />
      </SearchInputContainer>
      <ProfileBookContainer>
        <ProfileBookCard />
        <ProfileBookCard />
        <ProfileBookCard />
      </ProfileBookContainer>
    </MyBooksContainer>
  )
}
