import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const UserContact = styled(NavLink)`
  font-size: revert;
  font-weight: 400;
  margin-left: 450px;
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
`;

export const UserName = styled.p`
    display: flex;
    align-items: flex-end;
    font-size: large;
    font-weight: 600;
    cursor: pointer;
`;

export const OutButton = styled.button`
    margin-left: 15px;
    height: 22px;
    background-color: #1976d2;
    color: white;
    border: 1px solid white;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05) rotateX(0deg) translateZ(25px);
  }
`;
