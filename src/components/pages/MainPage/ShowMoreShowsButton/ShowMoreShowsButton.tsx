import React, { useContext } from 'react';
import style from './ShowMoreShowsButton.module.scss';
import { AppContext } from '../../../../Contexts/AppContext';

interface ShowMoreShowsButtonProps {
  showMoreShows: () => void;
  isMoreShows: boolean;
}

const ShowMoreShowsButton: React.FC<ShowMoreShowsButtonProps> = ({
  showMoreShows,
  isMoreShows,
}) => {
  const { switchMoreShows } = useContext(AppContext);
  return (
    <div className={style.more}>
      <button className="button" onClick={showMoreShows} disabled={switchMoreShows}>
        {isMoreShows ? 'Show less' : 'Show more'}
      </button>
    </div>
  );
};

export default ShowMoreShowsButton;
