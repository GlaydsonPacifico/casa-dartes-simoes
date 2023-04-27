import { AiOutlineWhatsApp } from 'react-icons/ai';
import api from '../../utils/api';
import { Container } from './styles';

interface GalleryItemProps {
  title: string;
  image: string;
  artistId?: string;
}

export function GalleryItem({ title, image, artistId }: GalleryItemProps) {

  function handleShareOnWhatsApp() {
    const urlToShorten = encodeURIComponent(image);
    const apiUrl = `https://api.shrtco.de/v2/shorten?url=${urlToShorten}`;

    api.get(apiUrl)
      .then(response => {
        const shortUrl = response.data.result.full_short_link;
        const message = `Confira este produto: ${title} - ${shortUrl}`;
        const phone = '558196216405';
        const url = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(url, '_blank');
      })
      .catch(error => {
        console.error('Erro ao encurtar URL:', error);
      });
  }

  return (
    <Container imgUrl={image}>
      <a>
        <div className='overlay'>
          <section>
            <h1>{title}</h1>
          </section>
        </div>
        <AiOutlineWhatsApp onClick={handleShareOnWhatsApp}/>
      </a>
    </Container>
  );
}
