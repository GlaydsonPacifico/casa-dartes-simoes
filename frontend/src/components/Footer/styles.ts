import styled from 'styled-components';

export const Container = styled.div`
display: flex;
width: 100%;
height: 5rem;
padding: 2rem;
align-items: center;
justify-content: space-between;
box-shadow: 0 0 5px rgba(83, 51, 237, 1);

button {
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.secondary };
  text-transform: uppercase;
  font-size: 1.2rem;

  &:hover {
    color: ${({ theme }) => theme.colors.primary };
  }
}

svg {
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary };
  width: 3rem;
  height: 3rem;
  transition: 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
}
`;
