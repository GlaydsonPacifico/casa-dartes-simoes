import styled from 'styled-components';

interface ProductsProps {
  imgUrl: string;
}

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 5rem;
margin-bottom: 3rem;

section {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

button {
  background: ${({ theme }) => theme.colors.secondary};
  padding: 0.7rem 2rem;
  border-radius: 0.5rem;
  border: none;
  transition: 0.5s;

  &:hover {
    background: ${({ theme }) => theme.colors.primary};
  }

  span {
    color: ${({ theme }) => theme.colors.textLight};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 1.2rem;
    transition: 0.5s;
  }

  &:hover > span {
    color: ${({ theme }) => theme.colors.textLight}
  }
}
`;

export const ProductContainer = styled.div<ProductsProps>`
width: 100%;
height: 25rem;
display: flex;
align-items: flex-end;
position: relative;

&:hover {
  div.overlay {
    opacity: 0.25;
  }
}

section > div.text {
  text-align: left;
  position: relative;
  right: 0;
}

button {
  margin: 0 0 3rem 5rem;
  height: 4rem;
  width: 12rem;

  span {
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: 0.5s;
  }
}

section {
  width: 50rem;
  height: 100%;
  background: url(${props => props.imgUrl}) no-repeat center;
  background-size: cover;
  position: relative;

  div.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.backgroundCard};
    opacity: 0.5;
  }

  div.text {
    background: white;
    opacity: 75%;
    padding: 1rem;
    border-radius: 0.5rem;
    top: 2rem;
    left: 1rem;
    position: absolute;
    transition: 0.5s;
    width: fit-content;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2rem;
  }
  h2 {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.5rem;
    font-weight: 300;
  }
}

&:nth-child(even) {
  flex-direction: row-reverse;

  button {
    margin: 0 2rem 3rem 0;
  }

  section > div.text {
    text-align: right;
    position: absolute;
    left: auto;
    right: 1rem;
    transition: right 0.3s ease-out;
  }
}

@media (max-width: 800px) {
  section {
    width: 100%;

    div.text {
      background: white;
      opacity: 75%;
      padding: 1rem;
      border-radius: 0.5rem;
      top: 1rem;
      left: 1rem;
      position: absolute;
      transition: 0.5s;
      width: fit-content;
    }
  }

  span {
      color: ${({ theme }) => theme.colors.secondary} !important;
    }

  button span {
    padding-left: 1rem;
  }

  button {
    background: white;
    opacity: 75%;
    padding: 1rem;
    border-radius: 0.5rem;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    margin: 0;
  }

  &:nth-child(even) {
    flex-direction: row;

    section {
      width: 100%;

      div.text {
        left: 1rem;
        top: 1rem;
        text-align: left;
      }
    }

    button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }
  }
}
  `;
