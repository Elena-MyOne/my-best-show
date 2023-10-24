import React from 'react';
import style from './CardItems.module.scss';
import { ShowData } from '../../models/interfaces';
import Card from '../Card/Card';

interface Props {
  props?: string;
  data?: ShowData[] | null;
}

interface CardItemsProps {
  data?: ShowData[] | null;
  shows?: ShowData[] | null;
}

class CardItems extends React.Component<Props, CardItemsProps> {
  constructor(props: Props) {
    super(props);
    this.state = {
      shows: null,
    };
  }

  componentDidMount() {
    if (this.props.data) {
      // const shows = this.props.data.slice(0, 15);
      const shows = this.props.data;
      this.setState({ shows });
    }
  }

  render() {
    const { shows } = this.state;

    return (
      <div className={style.items}>
        {shows && (
          <div className={style.shows}>
            {shows.map((show) => (
              <Card key={show.id} show={show} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default CardItems;
