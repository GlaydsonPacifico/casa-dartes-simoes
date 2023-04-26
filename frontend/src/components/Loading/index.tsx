import loading from '../../assets/loading.svg';
import { Container } from './styles';

export function Loading() {
  return (
    <Container>
      <img src={loading} alt="Loading" />
    </Container>
  );
}
