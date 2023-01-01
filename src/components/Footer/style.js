import styled from 'styled-components';

export const FooterStyles = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  .gray-line {
    width: 100%;
    height: 2px;
    background: #86859a;
  }
  p {
    font-size: 12px;
    margin-bottom: 20px;
    color: #86859a;
    text-align: center;
  }
`;
