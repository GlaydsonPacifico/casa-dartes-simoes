import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;

  section {
    width: 100%;
    margin-top: 3rem;
    display: flex;
    gap: 1.5rem;

    padding-bottom: 5rem;
  }

  @media (max-width: 1000px) {
    section {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
    }

    section > * {
      width: calc(45% - 0.75rem);
    }
  }

  @media (max-width: 700px) {
    section {
      flex-direction: column;
      align-items: center;
    }

    section > * {
      width: calc(80% - 0.75rem);
    }
  }

`;

export const ArtistItemContainer =  styled.div`
  width: 100%;

  div {
    color: ${({ theme })=> theme.colors.textLight };
    background: ${({ theme }) => theme.colors.backgroundCard };
    border-radius: 0.7rem;
    padding: 1rem;
    height: 21rem;

    transition: 0.5s;

  h1 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    text-align: center;
  }

  h2 {
    color: ${({ theme })=> theme.colors.secondary };
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.9rem;
    text-align: center;
  }
}
  &:hover > div {
    filter: brightness(1.5);
    transform: translateY(-20px);
  }

  &:nth-child(even) > div {
    margin-top: 2rem;
  }

  @media(max-width: 700px) {
    &:nth-child(odd) > div {
    margin-top: 2rem;
    }
  }
`;
