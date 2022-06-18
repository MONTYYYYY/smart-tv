import styled from 'styled-components/macro';

const Container = styled.div`
  width : 100%;
  height: 100%;
  display: flex;
`;

const GridParentContainer = styled.div`
  width : 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const PreviousPaginationContainer = styled.button`
  position: sticky;
  border:none;
  left: 0;
  width : 50px;
  height: 100%;
  background: rgb(172, 172, 172);
  * {
    :hover {
      cursor: pointer;
    }
  }
`;

const TriangleLeft = styled.span`
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    background: none;
    border-right: 30px solid white;
`;

const TriangleRight = styled.span`
    width: 0;
    height: 0;
    border-top: 30px solid transparent;
    border-bottom: 30px solid transparent;
    background: none;
    border-left: 30px solid white;
`;

const NextPaginationContainer = styled.button`
  position: absolute;
  width : 50px;
  border:none;
  height: 100%;
  right:0;
  background: rgba(172, 172, 172, 0.5);
  * {
    :hover {
      cursor: pointer;
    }
  }
`;

const ExitGridViewContainer = styled.button`
    position: absolute;
    width: 150px;
    height: 25px;
    border-radius: 0px 0px 10px 10px;
    top: 0;
    left: 45%;
    z-index: 100;
    background: black;
    color: white;
    text-align: center;
    font-size: 12px;
    padding-top: 5px;
    :hover {
      cursor: pointer;
    }
`;

const ToggleShowPhotosInfoContainer = styled.button`
    position: absolute;
    width: 150px;
    height: 25px;
    border-radius: 0px 0px 10px 10px;
    top: 0;
    left: 55%;
    z-index: 100;
    background: black;
    color: white;
    text-align: center;
    font-size: 12px;
    padding-top: 5px;
    :hover {
      cursor: pointer;
    }
`;

const LandingPageStyles = {
  Container,
  GridParentContainer,
  PreviousPaginationContainer,
  NextPaginationContainer,
  ExitGridViewContainer,
  ToggleShowPhotosInfoContainer,
  TriangleLeft,
  TriangleRight,
};

export default LandingPageStyles;
