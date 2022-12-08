import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const LinkNav = styled(NavLink)`
  font-size: larger;
  font-weight: 600;

  text-decoration: none;
  color: inherit;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &.active {
    color: white;
    text-decoration: underline;
  }
  :hover,
  :focus {
    transform: color;
    color: yellow;
  }
  & + & {
    margin-left: 30px;
  }
`;
