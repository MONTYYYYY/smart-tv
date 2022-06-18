import styled from 'styled-components/macro';

const Container = styled.div`
    position: absolute;
    bottom:0;
    background: black;
    color:white;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow-y: auto;
    overflow: hidden;

    &.elementToFadeIn {
        animation: fadeInAnimation ease 3s;
        animation-iteration-count: 1;
        animation-fill-mode: forwards;
    }
    @keyframes fadeInAnimation {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    &.elementToFadeOut {
       display:none;
    }
    @keyframes fadeOutAnimation {
        100% {
            opacity: 1;
        }
        0% {
            opacity: 0;
        }
    }

    &.backdrop-blur {
    background: rgba(0, 0, 0, 0.6);
    }

    /* if backdrop support: very transparent and blurred */
    @supports ((-webkit-backdrop-filter: blur(4px)) or (backdrop-filter: blur(4px))) {
    &.backdrop-blur {
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
        background: linear-gradient(
        126.6deg,
        rgba(255, 255, 255, 0.13) 28.69%,
        rgba(255, 255, 255, 0) 100%
        );
    }
    }
`;

const ProfileImage = styled.img`
    height: 25px;
    margin: 5px;
    border-radius: 50%;
`;

const InfoCardStyles = {
  Container,
  ProfileImage,
};

export default InfoCardStyles;
