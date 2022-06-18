import styled from 'styled-components/macro';

const OverLay = styled.div` 
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(48, 43, 112, 0.2);
  z-index: 50;
`;

const LoaderStyles = {
  OverLay,
};

export default LoaderStyles;
