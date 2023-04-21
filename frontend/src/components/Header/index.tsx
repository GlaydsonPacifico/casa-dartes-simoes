import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Início" path='/' activeClass='active-link'/>
      </ul>
      <ul>
        <NavLink title='Galeria' path='/gallery' activeClass='active-link'/>
      </ul>
    </Container>
  );
}
