import styled from 'styled-components';
import { motion } from 'framer-motion';
import { designColor, textColor, titleColor } from '../../config/colors';

export const ContactContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 12rem;

  h1 {
    font-size: 40px;
    color: ${titleColor};
  }
  .purple-line {
    width: 80%;
    height: 5px;
    background-color: ${designColor};
  }
`;

export const ContactDivs = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 20px;
`;

export const ContactTextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 20px;
  p {
    font-size: 14px;
    width: 80%;
    color: ${textColor};
    span {
      font-weight: 600;
      color: ${designColor};
    }
    a {
      text-decoration: none;
      color: ${designColor};
      font-weight: 600;
      transition: 0.3s ease-in-out;
      background: transparent;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  .social-icons-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 40px;
    margin-top: 10px;
    margin-bottom: 50px;
    background: transparent;
    .social-icon {
      width: 40px;
      height: 40px;
      background: transparent;
      transition: 0.2s ease-in-out !important;
    }
    a {
      color: white;
      text-decoration: none;
      transition: 0.2s ease-in-out !important;
      background: transparent;
      &:hover {
        transform: translateY(-2px);
        .linkedin {
          fill: #0a66c2;
        }
        .github {
          fill: #7b7b7b;
        }
      }
    }
  }
`;
