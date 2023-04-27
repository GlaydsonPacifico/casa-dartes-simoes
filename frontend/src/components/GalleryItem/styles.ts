import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  a {
    position: relative;
    width: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    height: 20rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition: 0.5s;
    overflow: hidden;

    &:hover {
      div.overlay {
        opacity: 0.25;
      }
    }

    svg {
      opacity: 0.7;
      cursor: pointer;
      z-index: 3;
      border-radius: 0.5rem;
      background-color: ${({ theme }) => theme.colors.textLight};
      color: ${({ theme }) => theme.colors.primary};
      width: 3rem;
      height: 3rem;
    }

    section {
      z-index: 2;
      background-color: ${({ theme }) => theme.colors.secondary};

      h1 {
        padding: 1rem;
        color: ${({ theme }) => theme.colors.primary};
      }
    }

    div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.colors.backgroundCard};
      opacity: 0.5;
      left: 0;
      bottom: 0;
    }
  }
`;
