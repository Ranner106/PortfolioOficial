import styled, { keyframes } from 'styled-components';

export const BounceAnimation = keyframes`
  to {
    transform: translateY(0);
  }

  50% { 
    opacity: 1;;
  }

`;

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
  animation: ${(props) => props.toggled && BounceAnimation} 1s step-start;
`;
