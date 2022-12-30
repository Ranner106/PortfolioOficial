import styled from 'styled-components';
import { motion } from 'framer-motion';
import { designColor, titleColor } from '../../../config/colors';

export const ProjectSectionContainer = styled(motion.section)`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;
  gap: 30px;
  align-items: center;
  justify-content: center;

  h1 {
    text-align: center;
    font-size: 40px;
    margin-bottom: 30px;
    color: ${titleColor};
  }

  .purple-line {
    width: 80%;
    height: 5px;
    border-radius: 10px;
    background-color: ${designColor};
  }
`;

export const ProjectCardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
`;
