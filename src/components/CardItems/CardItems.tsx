import React from 'react';
import style from './CardItems.module.scss';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { selectShows, setIsCardItemsDarked } from '../../redux/slices/ShowsSlice';
import { AppDispatch } from '../../redux/store';

interface CardItemsProps {
  shows: ShowData[] | SearchShowsData[];
}

const CardItems: React.FC<CardItemsProps> = ({ shows }) => {
  const { isCardItemsDarked } = useSelector(selectShows);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <div className={style.items}>
        {shows && (
          <div className={style.shows}>
            {renderData(shows, () => dispatch(setIsCardItemsDarked(true)))}
          </div>
        )}
        {isCardItemsDarked && <div className={style.back}></div>}
      </div>
    </>
  );
};

const renderData = (
  data: ShowData[] | SearchShowsData[],
  setIsCardItemsDarked: React.Dispatch<React.SetStateAction<boolean>> | undefined
) => {
  if (Array.isArray(data) && data.length > 0) {
    if (Object.prototype.hasOwnProperty.call(data[0], 'show')) {
      return (data as SearchShowsData[]).map((item) => (
        <Card key={item.show.id} show={item.show} setIsCardItemsDarked={setIsCardItemsDarked} />
      ));
    } else {
      return (data as ShowData[]).map((show) => (
        <Card key={show.id} show={show} setIsCardItemsDarked={setIsCardItemsDarked} />
      ));
    }
  }

  return null;
};

export default CardItems;
