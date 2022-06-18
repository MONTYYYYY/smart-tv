import styled from 'styled-components/macro';

export const MenuContainer = styled.nav<{ flexDirection: 'row' | 'column' }>`
    display:flex;
    flex-direction:${(props) => props.flexDirection};
    position:relative;
    flex:0.05;
    top:0px;
    width : 100%;
    height:100%;
`;

export const MenuList = styled.ul`
  display:flex;
  flex-direction: column;
  height: 50vh;
  padding-inline-start:0px;
  margin-left:1% !important;
`;

interface MenuItemProps {
  readonly active?: boolean
}

export const MenuLinkContent = styled.div<MenuItemProps>`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-self: center;
  font-weight: ${(props) => (props.active ? '600' : 'normal')};
`;

export const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const MenuLabel = styled.label`
  font-size : 10px;
  font-weight: bold;
  color: #535353;
  
  &.active {
    color: white;
    font-weight: 600;
  }
`;

export const MenuItemContainer = styled.li<MenuItemProps>`
    flex : 1;
    height : 150px;
    display:flex;
    cursor:pointer;

    .activeIndicator {
      left: 0; 
      width: 3.65px;
      background: orange;
    }

`;

export const MenuLink = styled.button`
  display:flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
  border:none;
  flex: 1;
  background: #E3E3E3;

  &.active {
   background:#535353;
  }
`;
