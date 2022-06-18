import styled from 'styled-components/macro';

interface IBodyProps {
  isGridActive? : boolean;
}
const Body = styled.main<IBodyProps>`
    height: 100%;
    overflow: hidden;
    margin: 0px;
    display: flex;
    .column {
        height: 100vh;
        display: flex;
        flex-direction: column;
        border-left: 1.13117px solid #EBEBEB;
        border-right: 1.13117px solid #EBEBEB;
        box-shadow: 0px 20px 20px rgba(0, 0, 0, 0.05);
    }
    .flex-column {
      display: flex;
      flex-direction: column;
    }
    #left {
        flex-shrink: 0;
        background: rgba(255, 255, 255, 1);
        width:145px;
    }
    #right {
        width: 100%;
        flex-shrink: 0;
        /* width: calc(100vw - 145px); */
        width: ${(props) => (props.isGridActive ? '100vw' : 'calc(100vw - 145px)')};
    }
    .bottom {
        flex-grow: 1;
        overflow-y: auto;
    }

    .right-full {
        flex-grow: 1;
        overflow-y: auto;
    }
    ul{
        display: inline-flex;
        list-style: none;
        margin: 0;
    }
`;

export default Body;
