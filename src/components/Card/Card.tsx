import React from 'react';
import { ShowData } from '../../models/interfaces';
import style from './Card.module.scss';
import { AiFillStar } from 'react-icons/ai';

interface CardProps {
  show: ShowData | null;
}

class Card extends React.Component<CardProps> {
  render() {
    const { show } = this.props;

    if (show === null) {
      return <div className={style.error}>No show data available</div>;
    }

    const years = `${show.premiered.slice(0, 4)} ${
      show.ended ? '- ' + show.ended.slice(0, 4) : ''
    } `;

    const image = show.image?.medium;

    return (
      <div className={style.card}>
        <div className={style.image}>
          {image && <img src={show.image.medium} alt="cover" />}

          <div className={style.top}>
            <div className={style.rating}>
              <AiFillStar />
              <span className={style.average}>{show.rating.average}</span>
            </div>
            <div className={style.genres}>{show.genres.join(', ')}</div>
            <div className={style.years}>{years}</div>
          </div>
        </div>
        <h3 className={style.name}>{show.name}</h3>
      </div>
    );
  }
}

export default Card;
