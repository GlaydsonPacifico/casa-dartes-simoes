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
    height: 15rem;
    padding: 1.5rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5 rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.colors.texLight};
      div.overlay {
        opacity: 0.25;
      }
    }

    section {
      z-index: 2;
      h1 {
        padding: 1rem;
        color: ${({ theme }) => theme.colors.secondary};
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
