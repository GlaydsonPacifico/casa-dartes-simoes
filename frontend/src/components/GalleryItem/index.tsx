import { Container } from './styles';

interface GalleryItemProps {
  title: string;
  image: string;
  artistId?: string;
}

export function GalleryItem({ title, image, artistId }: GalleryItemProps) {
  return (
    <Container imgUrl={image}>
      <a>
        <div className='overlay'>
          <section>
            <h1>{title}</h1>
          </section>
        </div>
      </a>
    </Container>
  );
}
