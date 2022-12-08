import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HomeThumb = styled.div`
  min-height: calc(40vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: space-around;
  padding-top: 100px;
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 48;
  text-align: center;
  margin-bottom: 40px;
`;

export const Button = styled.div`
  display: flex;
  width: 150px;
  height: 45px;
  background-color: #1976d2;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    color: white;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(1.05) rotateX(0deg) translateZ(25px);
  }
`;

export const Link = styled(NavLink)`
  font-size: larger;
  font-weight: 600;
  padding: 10px 50px;
  text-decoration: none;
  color: white;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    transform: color;
    color: yellow;
  }
`;
