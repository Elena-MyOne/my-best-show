import React from 'react';
import style from './CardItems.module.scss';
import { SearchShowsData, ShowData } from '../../models/interfaces';
import Card from '../Card/Card';

interface Props {
  data?: ShowData[] | SearchShowsData[] | null;
}

class CardItems extends React.Component<Props> {
  render() {
    const { data } = this.props;

    return (
      <div className={style.items}>
        {data && <div className={style.shows}>{this.renderData(data)}</div>}
      </div>
    );
  }

  renderData(data: ShowData[] | SearchShowsData[]) {
    if (Array.isArray(data) && data.length > 0) {
      if (Object.prototype.hasOwnProperty.call(data[0], 'show')) {
        return (data as SearchShowsData[]).map((item) => (
          <Card key={item.show.id} show={item.show} />
        ));
      } else {
        return (data as ShowData[]).map((show) => <Card key={show.id} show={show} />);
      }
    }

    return null;
  }
}

export default CardItems;
