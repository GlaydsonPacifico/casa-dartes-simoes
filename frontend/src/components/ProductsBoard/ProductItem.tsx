import { AiOutlineRightCircle, AiOutlineWhatsApp, AiOutlineClose } from 'react-icons/ai';
import { ProductContainer } from './styles';
import { useState } from 'react';
import { ModalButton, ModalContainer } from '../Modal/styles';

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

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const shortUrl = data.result.full_short_link;
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
            <h1>{title}</h1>
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
