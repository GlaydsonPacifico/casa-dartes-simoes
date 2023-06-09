import { AiOutlineRightCircle, AiOutlineWhatsApp, AiOutlineClose } from 'react-icons/ai';
import { ProductContainer } from './styles';
import { useEffect, useState } from 'react';
import { ModalButton, ModalContainer } from '../Modal/styles';
import api from '../../utils/api';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleOpenModal() {
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

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

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleCloseModal();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleCloseModal]);



  return (
    <>
      <ProductContainer imgUrl={image}>
        <section>
          <div className="overlay" />
          <div className="text">
            <h1>{title}</h1>
            <h2>{artistId}</h2>
          </div>
        </section>
        <button onClick={handleOpenModal}>
          <span>
            Ver mais <AiOutlineRightCircle />
          </span>
        </button>
      </ProductContainer>

      {isModalOpen && (
        <ModalContainer>
          <section>
            <img src={image} alt={title} />
          </section>
          <ModalButton >
            <AiOutlineWhatsApp onClick={handleShareOnWhatsApp}/>
            <AiOutlineClose onClick={handleCloseModal}/>
          </ModalButton>
        </ModalContainer>
      )}
    </>
  );
}
