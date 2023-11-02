import { LatestReviews } from './components/LatestReviews'
import { PopularBooks } from './components/PopularBooks'
import { Sidebar } from '../../components/Sidebar'
import { Container } from './styles'

export default function Home() {
  return (
    <Container>
      <Sidebar />
      <LatestReviews />
      <PopularBooks />
    </Container>
  )
}
