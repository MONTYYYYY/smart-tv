import React from 'react';
import { selectTv, setGridActive, setShowPhotosInfo } from '../../redux/slices/tvSlice';
import GridControlsStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';

function GridControls() {
  const { isPhotosInfoDisplayed } = useAppSelector(selectTv);
  const dispatch = useAppDispatch();
  const handleExitGridViewButtonClick = () => {
    dispatch(setGridActive(false));
  };

  const handleToggleShowPhotosInfoClick = () => {
    dispatch(setShowPhotosInfo(!isPhotosInfoDisplayed));
  };

  return (
    <>
      <GridControlsStyles.ExitGridViewContainer
        id="exitGridControl"
        className="grid-control-item"
        type="button"
        onClick={handleExitGridViewButtonClick}
      >
        <b>Exit Grid View</b>
      </GridControlsStyles.ExitGridViewContainer>
      <GridControlsStyles.ToggleShowPhotosInfoContainer
        id="toggleShowInfoDisplayControl"
        className="grid-control-item"
        type="button"
        onClick={handleToggleShowPhotosInfoClick}
      >
        <b>
          {isPhotosInfoDisplayed ? 'Hide' : 'Show'}
          {' '}
          Photo Info
        </b>
      </GridControlsStyles.ToggleShowPhotosInfoContainer>
    </>
  );
}

export default GridControls;
