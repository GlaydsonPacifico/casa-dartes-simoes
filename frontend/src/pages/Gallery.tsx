import { GalleryContainer } from '../styles/GalleryStyles';
import { Header } from '../components/Header';
import { GalleryItem } from '../components/GalleryItem';
import { useEffect, useState } from 'react';
import api from '../utils/api';
import { Loading } from '../components/Loading';

interface Product {
  id: string;
  title: string;
  image: string;
  artistId?: string;
}

export function Gallery() {
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
    <>
      <Header />
      <GalleryContainer>
        <main className="container">
          {products.map(product => (
            <GalleryItem
              key={product.id}
              title={product.title}
              image={product.image}
            />
          ))}
          {!loading && <Loading />}
        </main>
      </GalleryContainer>
    </>
  );
}
