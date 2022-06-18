import styled from 'styled-components/macro';

const Container = styled.div`
    position: relative;
    background: #535353;
    height: 100%;
    width: 100%;
    border-width: 3px;

    &:hover,
    &.selected {
      border-style: solid;
    }

    &:hover {
      border-color: black;
    }
    &.selected {
      border-color: orange;
    }
`;

interface IPhotoImageProps {
  isLoading?: boolean
}
const PhotoImage = styled.img<IPhotoImageProps>`
    height: 100%;
    width: 100%;
    transition: all 0.25s ease;
    opacity: ${(props) => (props.isLoading ? 0.2 : 1)};
`;

const PhotoStyles = {
  Container,
  PhotoImage,
};

export default PhotoStyles;
