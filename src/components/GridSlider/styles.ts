import styled from 'styled-components/macro';

const GridContainer = styled.div`
  width : 100%;
  height: 100%;
  display: grid;
  gap: 12px;
  padding: 5px;
  margin: 10px 0px;
  grid-auto-flow: column;
  grid-auto-columns: minmax(30%, 100%);
  grid-template-columns: repeat(auto-fill,minmax(30%,1fr));
  overflow: hidden;
  grid-template-rows: 100%;
  scroll-behavior: smooth;
`;

const GridSliderStyles = {
  GridContainer,
};

export default GridSliderStyles;
