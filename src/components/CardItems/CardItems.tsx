import React, { useContext } from 'react';
import style from './CardItems.module.scss';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import Card from '../Card/Card';
import { AppContext } from '../../Contexts/AppContext';

interface CardItemsProps {
  shows: ShowData[] | SearchShowsData[];
}

const CardItems: React.FC<CardItemsProps> = ({ shows }) => {
  const { isCardItemsDarked, setIsCardItemsDarked } = useContext(AppContext);

  return (
    <>
      <div className={style.items}>
        {shows && <div className={style.shows}>{renderData(shows, setIsCardItemsDarked)}</div>}
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
