import { ModalContainer } from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  return (
    <>
      {isOpen && (
        <ModalContainer onClick={handleModalClick}>
          <h1>{title}</h1>
          {children}
          <button onClick={onClose}>Fechar</button>
        </ModalContainer>
      )}
    </>
  );
}
