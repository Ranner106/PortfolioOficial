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
  opacity: ${(props) => (props.position ? 1 : 0)};
  transition: all 1s ease-in-out;

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

export const SkillsSection = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  h1 {
    font-size: 40px;
  }
  .line {
    background: ${designColor};
    width: 82%;
    height: 4px;
    margin: 4rem 0;
  }
  .skills {
    color: ${titleColor};
  }

  .skills-container {
    display: flex;
    flex-flow: row wrap;
    width: 80%;
    justify-content: center;
  }
`;

export const SkillContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 120px;
  height: 120px;
  margin: 20px 0;
  background: transparent;
  transition: 0.2s ease-in-out !important;

  .skill-icon {
    width: 40px;
    height: 40px;
    transition: 0s;
    background: transparent;
    color: ${designColor};
  }
  p {
    text-align: center;
    max-width: 100px;
    font-size: 15px;
    color: ${textColor};
  }
  &:hover {
    transform: scale(1.04);
    .skill-icon {
      fill: ${({ color }) => color};
    }
    p {
      color: ${({ color }) => color};
    }
  }
`;
