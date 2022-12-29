import styled from 'styled-components';
import { motion } from 'framer-motion';
import { designColor, textColor, titleColor } from '../../config/colors';

export const AboutContainer = styled.main`
  margin-top: 15rem;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  .line {
    background: ${designColor};
    width: 90%;
    height: 4px;
    margin: 4rem 0;
  }

  .description {
    width: 80%;
    margin-bottom: 50px;
  }

  h1 {
    width: fit-content;
    margin-bottom: 20px;
    font-size: 50px;
    min-height: 150px;
    color: ${textColor};
  }

  h2 {
    font-size: 30px;
    color: ${textColor};
  }

  p {
    font-weight: 400;
    margin: 3rem 0;
  }

  span {
    font-weight: 700;
    color: ${textColor};
  }

  .aboutMe {
    display: flex;
    gap: 100px;
  }

  img {
    width: 70%;
    height: 100%;
    background-color: ${designColor};
    border-radius: 54px;
  }

  .text,
  p {
    width: 95%;
    font-size: 20px;
    color: ${textColor};
  }

  .myname {
    color: ${titleColor};
  }
`;
