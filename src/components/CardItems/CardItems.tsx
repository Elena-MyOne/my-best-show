import React from 'react';
import style from './CardItems.module.scss';
import { ShowData } from '../../models/interfaces';
import Card from '../Card/Card';

interface Props {
  data?: ShowData[] | null;
}

class CardItems extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div className={style.items}>
        {data && (
          <div className={style.shows}>
            {data.map((show) => (
              <Card key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardItems;
