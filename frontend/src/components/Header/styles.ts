import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  height: 4rem;
  margin-bottom: 3rem;
  box-shadow: 0 0 5px rgba(83, 51, 237, 1);
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    font-size: 1.5rem;
    transition: 0.5s;
    font-weight: ${props => props.isActive
    ? 600
    : 400
};
    color: ${props => props.isActive
    ? props.theme.colors.primary
    : props.theme.colors.secondary
};
  transition: 0.5s;

  &:hover {
    font-size: 1.9em;
    font-weight: ${props => props.isActive
    ? 600
    : 400
};
    color: ${props => props.theme.colors.primary
};
  transition: 0.5s;
  }
}
`;

