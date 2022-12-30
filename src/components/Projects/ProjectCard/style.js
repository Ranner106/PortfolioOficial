import styled from 'styled-components';
import { motion } from 'framer-motion';
import { designColor, textProject } from '../../../config/colors';

export const ProjectCardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  overflow: hidden;

  .project-image-container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }

  .project-image {
    width: 50%;
    height: auto;
    border-radius: 10px;
  }

  .info-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .project-name {
    font-size: 18px;
    font-weight: 600;
    color: ${designColor};
  }

  .project-description {
    font-size: 12px;
    max-width: 90%;
    text-align: center;
    color: ${textProject};
  }

  .project-techs {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    max-width: 95%;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    span {
      padding: 6px;
      font-size: 12px;
      background-color: ${designColor};
      font-weight: 400;
      border-radius: 6px;
      opacity: 0.8;
      transition: 0.3s ease-in-out;
      color: white;
      &:hover {
        cursor: default;
        transform: translateY(-2px);
      }
    }
  }
  .project-links {
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
    a {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 12px;
      font-weight: 700;
      padding: 7px;
      text-decoration: none;
      border-radius: 5px;
      color: white;
      background-color: ${designColor};
      transition: 0.3s ease-in-out;
      .icon {
        background: transparent;
        fill: white;
      }
      &:hover {
        transform: translateY(-2px);
      }
    }
  }

  .purple-line {
    width: 90%;
    height: 3px;
    background: ${designColor};
    margin-top: 30px;
  }
`;
