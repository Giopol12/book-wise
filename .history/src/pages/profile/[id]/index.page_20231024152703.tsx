import { useRouter } from 'next/router'
import { Sidebar } from '../../../components/Sidebar'
import { Container } from './styles'
import { MyBooks } from '../components/MyBooks'
import { Analytics } from '../components/Analytics'

export default function Profile() {
  return (
    <Container>
      <Sidebar />
      <MyBooks />
      <Analytics />
    </Container>
  )
}
