import { useEffect, useState } from 'react';
import { SectionTitle } from '../SectionTitle';
import { ProductItem } from './ProductItem';
import { Container } from './styles';
import api from '../../utils/api';

interface Product {
  id: string;
  title: string;
  image: string;
  artistId?: string;
}

export function ProductsBoard() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get('api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);


  return (
    <Container>
      <SectionTitle title='Alguns de nossos produtos' />

      <section>
        {products.slice(0,5).map(product => (
          <ProductItem
            key={product.id}
            title={product.title}
            image={product.image}
          />
        ))}
      </section>
      <button type="button">
        <a href="/gallery">Ver mais</a>
      </button>
    </Container>
  );
}
