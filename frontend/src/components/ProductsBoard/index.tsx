import { SectionTitle } from '../SectionTitle';
import { ProductItem } from './ProductItem';
import { Container } from './styles';


export function ProductsBoard() {
  return (
    <Container>
      <SectionTitle title='Alguns de nossos produtos' />

      <section>
        <ProductItem
          title='Produto 1'
          artistId='Gabriela'
          image="https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        />
        <ProductItem
          title='Produto 2'
          artistId='Gabriela'
          image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        />
        <ProductItem
          title='Produto 3'
          artistId='Gabriela'
          image='https://images.unsplash.com/photo-1656147262261-2f275e1dae33?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        />
      </section>
      <button type="button">
        <a href="/gallery">Ver mais</a>
      </button>
    </Container>
  );
}
