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
      <GridControlsStyles.ExitGridViewContainer type="button" onClick={handleExitGridViewButtonClick}>
        <b>Exit Grid View</b>
      </GridControlsStyles.ExitGridViewContainer>
      <GridControlsStyles.ToggleShowPhotosInfoContainer type="button" onClick={handleToggleShowPhotosInfoClick}>
        <b>
          {isPhotosInfoDisplayed ? 'Hide' : 'Show'}
          {' '}
          Grid Info
        </b>
      </GridControlsStyles.ToggleShowPhotosInfoContainer>
    </>
  );
}

export default GridControls;
