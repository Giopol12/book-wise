import { Sidebar } from '@/components/Sidebar'
import {
  Container,
  ExploreBookContainer,
  ExploreContainer,
  ExploreHeader,
  ExploreSearchInput,
  ExploreSearchInputContainer,
  PageTitle,
  Tag,
  TagsContainer,
} from './styles'
import { Binoculars, MagnifyingGlass } from 'phosphor-react'
import { ExploreBookCard } from './components/ExploreBookCard'

import * as Dialog from '@radix-ui/react-dialog'
import { NewCommentModal } from '@/components/NewCommentModal'

export default function Explore() {
  const array = Array.from({ length: 15 }).map((_, i) => {
    return i
  })

  return (
    <Container>
      <Sidebar />
      <ExploreContainer>
        <ExploreHeader>
          <PageTitle>
            <Binoculars size={32} />
            <h1>Explorar</h1>
          </PageTitle>
          <ExploreSearchInputContainer>
            <ExploreSearchInput placeholder="Buscar livro ou autor" />
            <MagnifyingGlass size={20} />
          </ExploreSearchInputContainer>
        </ExploreHeader>
        <TagsContainer>
          <Tag enabled={true}>Tudo</Tag>
          <Tag>Tudo</Tag>
          <Tag>Tudo</Tag>
          <Tag>Tudo</Tag>
          <Tag>Tudo</Tag>
          <Tag>Tudo</Tag>
        </TagsContainer>
        <ExploreBookContainer>
          {array.map((id) => {
            return (
              <Dialog.Root key={id}>
                {/* <Dialog.Trigger key={id}>
                
                </Dialog.Trigger> */}
                <ExploreBookCard />
                <NewCommentModal />
              </Dialog.Root>
            )
          })}
        </ExploreBookContainer>
      </ExploreContainer>
    </Container>
  )
}
