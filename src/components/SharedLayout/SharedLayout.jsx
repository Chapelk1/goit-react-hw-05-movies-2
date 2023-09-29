import { Outlet} from "react-router-dom"
import { Suspense } from "react"
import {
  Container,
  Header,
  Link,
  Paragraf,
} from 'components/SharedLayout/SharedLayout.styled';

export default function SharedLayout(){

    return (
      <>
        <Container>
          <Header>
            <Link to="/" end> Home </Link>
            <Link to="/movies">Movies</Link>
          </Header>

          <Suspense fallback={<Paragraf>Loading page...</Paragraf>}>
            <Outlet />
          </Suspense>
        </Container>
      </>
    );
}