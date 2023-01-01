import styled from 'styled-components';
import { titleColor, textColor } from '../../config/colors';

export const NavbarStyles = styled.nav`
  display: flex;
  flex-direction: column;
  position: fixed;
  opacity: 0;
  z-index: 1;
  inset: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  transform: translateY(-1000px);
  -webkit-transform: translateY(-1000px);
  opacity: 0;
  transition: 0.5s ease-in-out;
  background-color: ${({ toggled }) => toggled && '#2D033B'};
  transform-origin: 1px;
  /* animation: ${(props) => props.toggled} 1s calc(); */

  &:nth-child(1) {
    transform: ${({ toggled }) => toggled && 'rotate(0)'};
  }
  &:nth-child(2) {
    transform: ${({ toggled }) => toggled && 'translateX(0)'};
    opacity: ${({ toggled }) => toggled && 1};
  }

  ul {
    list-style: none;

    li {
      text-align: center;
      a {
        text-decoration: none;
        font-size: 40px;
        font-weight: 500;
        transition: 0.5s ease-in-out;
        scroll-behavior: smooth;
        color: ${textColor};
        &:hover {
          color: ${titleColor};
        }
      }
    }
  }

  @media screen and (min-width: 800px) {
    ul li a {
      font-size: 40px;
    }
  }
`;
