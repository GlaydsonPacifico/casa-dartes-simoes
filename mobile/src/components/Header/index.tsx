import { Text } from '../Text';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Text size={20}>Bem vindo(a)</Text>
      <Text size={24} weight="700">
        CASA D&#39;ARTES
        <Text size={24}>APP</Text>
      </Text>
    </Container>
  );
}
