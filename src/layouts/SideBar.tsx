import React from 'react';
import { useAppSelector } from '../helpers/hooks';
import { selectTv } from '../redux/slices/tvSlice';
import Body from './styles';

export interface IRouteProps {
  component: React.FunctionComponent<any>,
}

export interface ISideBarLayoutProps extends IRouteProps {
  sideBarContent: React.ReactElement,
}

// eslint-disable-next-line max-len
function SideBarLayout({ component: Component, sideBarContent }: ISideBarLayoutProps) {
  const { isGridActive } = useAppSelector(selectTv);
  return (
    <Body isGridActive={isGridActive}>
      <div style={{ display: isGridActive ? 'none' : 'block' }} id="left" className="column">
        <div className="bottom">
          {sideBarContent}
        </div>
      </div>
      <div id="right" className="column">
        <div className="right-full">
          <Component />
        </div>
      </div>
    </Body>
  );
}

export default SideBarLayout;
