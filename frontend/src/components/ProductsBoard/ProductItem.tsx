import { AiOutlineRightCircle } from 'react-icons/ai';
import { ProductContainer } from './styles';

interface ProductsBoardProps {
  title: string;
  image: string;
  artistId?: string;
}

export function ProductItem({
  title,
  image,
  artistId
}: ProductsBoardProps) {
  return (
    <ProductContainer imgUrl={image}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{artistId}</h2>
        </div>
      </section>
      <button>
        <a href="#">
        Ver mais <AiOutlineRightCircle />
        </a>
      </button>

    </ProductContainer>
  );
}
