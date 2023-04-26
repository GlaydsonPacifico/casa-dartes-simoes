import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CiCircleMore } from 'react-icons/ci';

import { SectionTitle } from '../SectionTitle';
import { ProductItem } from './ProductItem';
import { Loading } from '../Loading';

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
  const [loading, setloading] = useState(false);

  useEffect(() => {
    api.get('api/products')
      .then(response => {
        setProducts(response.data);
        setloading(true);
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
        {!loading && <Loading />}
      </section>
      <button type="button">
        <Link to="/gallery">
          <span>
            Ver mais <CiCircleMore />
          </span>
        </Link>
      </button>
    </Container>
  );
}
