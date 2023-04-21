import { NavLink as ReactRouterNavLink, useMatch } from 'react-router-dom';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  activeClass: string;
}

export function NavLink({ title, path, activeClass = 'active' }: Props) {
  const match = useMatch(path);
  const isActive = !!match;

  return (
    <>
      <NavLinkContainer isActive={isActive}>
        <ReactRouterNavLink to={path} className={isActive ? activeClass : ''}>
          {title}
        </ReactRouterNavLink>
      </NavLinkContainer>
    </>
  );
}
