import React from 'react';
import { useAppDispatch } from '../../helpers/hooks';
import { IPhoto } from '../../helpers/interfaces';
import { setGridActive } from '../../redux/slices/tvSlice';
import Photo from '../Photo/Photo';
import GridSliderStyles from './styles';

interface IGridSliderProps {
    photos : IPhoto[]
    selectedGridItem : string;
    setSelectedGridItem : React.Dispatch<React.SetStateAction<string>>;
  }
const GridSlider = React.forwardRef((props : IGridSliderProps, ref:any) => {
  const { photos, selectedGridItem, setSelectedGridItem } = props;
  const dispatch = useAppDispatch();

  const handleContainerClick = () => {
    dispatch(setGridActive(true));
  };

  return (
    <GridSliderStyles.GridContainer ref={ref} onClick={handleContainerClick}>
      {
          photos?.map((photo: IPhoto) => (
            <Photo
              key={photo.id}
              selectedGridItem={selectedGridItem}
              setSelectedGridItem={setSelectedGridItem}
              photo={photo}
            />
          ))
        }
    </GridSliderStyles.GridContainer>
  );
});

export default GridSlider;
