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
    const message = `Confira este produto: ${title} - ${image}`;
    const phone = '558196216405';
    const imageLink = encodeURIComponent(image);
    const messageLink = encodeURIComponent(`${message}\n${imageLink}`);
    const url = `whatsapp://send?phone=${phone}&text=${messageLink}`;
    window.open(url, '_blank');
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
            <div className="overlay" />
            <div className="text">
              <h1>{title}</h1>
              <img src={image} alt={title} />
            </div>
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
