import React from 'react';
import style from './CardItems.module.scss';
import { ShowData } from '../../models/interfaces';

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
      const shows = this.props.data.slice(0, 10);
      this.setState({ shows });
    }
  }

  render() {
    const { shows } = this.state;

    return (
      <div className={style.items}>
        {shows && (
          <ul>
            {shows.map((show) => (
              <li key={show.id}>{show.name}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default CardItems;
