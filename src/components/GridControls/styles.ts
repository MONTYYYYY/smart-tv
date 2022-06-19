import styled from 'styled-components/macro';

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
    left: 56%;
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
  ExitGridViewContainer,
  ToggleShowPhotosInfoContainer,
};

export default LandingPageStyles;
