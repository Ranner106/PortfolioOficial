import styled from 'styled-components';
import { motion } from 'framer-motion';
import { designColor, titleColor, backgroundColor } from '../../config/colors';

export const HeaderContainer = styled(motion.header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
  top: -70px;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
  z-index: 2;

  .burger-icon {
    color: ${designColor};
    &:hover {
      cursor: pointer;
      fill: ${titleColor};
    }
  }

  @media screen and (max-width: 800px) {
    background-color: ${designColor};
    height: 150px;

    .image-content {
      margin-top: 60px;
    }

    img {
      width: 120px;
    }

    .burger-icon {
      color: ${backgroundColor};
      margin-top: 60px;
    }
  }
`;
