/* eslint-disable no-param-reassign */
import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSound from 'use-sound';
import LandingStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import {
  fetchTopics,
  selectTv,
  fetchRelatedTopicsConcurrent,
  Status,
} from '../../redux/slices/tvSlice';
import { ITopic } from '../../helpers/interfaces';
import { SoundTracks } from '../../assets/index';
import Loader from '../../components/PageLoader/Loader';
import GridSlider from '../../components/GridSlider/GridSlider';
import GridControls from '../../components/GridControls/GridControls';
import { ParamOptions } from '../../helpers/constants/data';

function Landing() {
  const [play] = useSound(SoundTracks.InterfaceClick);
  const gridParentContainerRef = useRef<any>();
  const gridTopContainerRef = React.createRef<any>();
  const gridBottomContainerRef = React.createRef<any>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [slug, setSlug] = useState<string>('');
  const topicSlug = searchParams.get(ParamOptions.Topic);
  const [selectedGridItem, setSelectedGridItem] = useState<string>('');
  const {
    topicsLoadingStatus,
    photosLoadingStatus,
    photos,
    topics,
    isGridActive,
  } = useAppSelector(selectTv);
  const isLoaded = photosLoadingStatus === Status.Idle && topicsLoadingStatus === Status.Idle;
  const dispatch = useAppDispatch();

  // Each row in a grid has to have same number of items.
  const maxItemsPerRow = Math.ceil((photos[slug] ?? []).length / 2);

  const scroll = (ref : React.MutableRefObject<any>, scrollOffset: number) => {
    ref.current.scrollLeft += scrollOffset;
  };

  const resetScrollLeft = (ref : React.MutableRefObject<any>) => {
    ref.current.scrollLeft = 0;
  };

  useEffect(() => {
    dispatch(fetchTopics()).then((response:any) => {
      if (response.payload.length) {
        const slugs : string[] = response.payload.map((x:ITopic) => x.slug);
        dispatch(fetchRelatedTopicsConcurrent(slugs));
      }
    });
  }, []);

  useEffect(() => {
    if (topicSlug) {
      setSlug(topicSlug);
      // reset ref scroll positions
      resetScrollLeft(gridTopContainerRef);
      resetScrollLeft(gridBottomContainerRef);
    }
  }, [topicSlug]);

  useEffect(() => {
    if (topics.length && !topicSlug) {
      // Set first topic as default slug
      const defaultSlug = topics[0].slug;
      setSearchParams({ topic: defaultSlug });
    }
  }, [topics]);

  useEffect(() => {
    if (!isGridActive) {
      setSelectedGridItem('');
    }
  }, [isGridActive]);

  // This is an approximation.
  const getOffsetValue = () => (gridParentContainerRef?.current?.clientWidth as number || 0) * 0.31;

  const next = () => {
    play();
    scroll(gridTopContainerRef, getOffsetValue());
    scroll(gridBottomContainerRef, getOffsetValue());
  };

  const previous = () => {
    play();
    scroll(gridTopContainerRef, getOffsetValue() * -1);
    scroll(gridBottomContainerRef, getOffsetValue() * -1);
  };

  return (
    <LandingStyles.Container className="page-container">
      { isGridActive && (
        <>
          <GridControls />
          <LandingStyles.PreviousPaginationContainer onClick={previous} className="pagination-control center-child-items">
            <LandingStyles.TriangleLeft />
          </LandingStyles.PreviousPaginationContainer>
        </>
      )}
      <LandingStyles.GridParentContainer id="grid" ref={gridParentContainerRef}>
        <GridSlider
          photos={photos[slug]?.slice(0, maxItemsPerRow)}
          ref={gridTopContainerRef}
          selectedGridItem={selectedGridItem}
          setSelectedGridItem={setSelectedGridItem}
        />
        <GridSlider
          photos={photos[slug]?.slice(maxItemsPerRow)}
          ref={gridBottomContainerRef}
          selectedGridItem={selectedGridItem}
          setSelectedGridItem={setSelectedGridItem}
        />
        {isGridActive && (
        <LandingStyles.NextPaginationContainer onClick={next} className="pagination-control center-child-items">
          <LandingStyles.TriangleRight />
        </LandingStyles.NextPaginationContainer>
        )}
      </LandingStyles.GridParentContainer>
      { !isLoaded && <Loader />}
    </LandingStyles.Container>
  );
}

export default Landing;
