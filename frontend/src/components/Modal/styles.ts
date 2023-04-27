import styled from 'styled-components';

export const ModalContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 0.5rem;
  box-shadow: 0 0 0.7rem ${({ theme }) => theme.colors.secondary};
  width: 30vw;
  padding: 1.2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  img {
    max-width: 100%;
    height: auto;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 300;
  }

  @media(max-width: 800px) {
    width: 80vw;
  }
`;

export const ModalButton = styled.div`
    display: flex;
    justify-content: space-between;

    svg {
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
      margin-top: 0.7rem;
      width: 2.5rem;
      height: 2.5rem;
    }
  `;
