import React from 'react';
import style from './CardItems.module.scss';
import { ShowData } from '../../models/interfaces';

interface CardItemsProps {
  data: ShowData[] | null;
}

class CardItems extends React.Component<CardItemsProps> {
  render() {
    return (
      <div className={style.items}>
        <div className="">HomePage</div>
      </div>
    );
  }
}

export default CardItems;
