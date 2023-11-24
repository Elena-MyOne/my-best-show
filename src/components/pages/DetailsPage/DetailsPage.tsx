import React, { useState, useEffect, useCallback } from 'react';
import style from './DetailsPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { ROUTER_PATHS } from '../../../models/enums';
import { AiFillStar } from 'react-icons/ai';
import { GoLinkExternal } from 'react-icons/go';
import Spinner from '../../Spinner/Spinner';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../redux/store';
import { setIsCardItemsDarked } from '../../../redux/slices/ShowsSlice';
import { useGetShowByIdQuery } from '../../../redux/api/apiSlice';
import { ShowData } from '../../../models/interfaces';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();
  const { data, isLoading, isSuccess, isError, error } = useGetShowByIdQuery(id!);

  const goBack = () => {
    navigate(`${ROUTER_PATHS.MAIN}`);
    dispatch(setIsCardItemsDarked(false));
  };

  const noDate = 'no data to show';

  const [show, setShow] = useState({
    id: 0,
    image: '',
    name: '',
    rating: 0,
    language: '',
    summary: '',
    genres: [noDate],
    premiered: '',
    ended: '',
    officialSite: '',
  });

  const getShowById = useCallback(
    (data: ShowData) => {
      if (isError && error) {
        console.error(error);
      }

      if (isSuccess) {
        show.genres = [];
        const image = data.image?.original || '';

        setShow({
          id: data.id,
          image,
          name: data.name,
          rating: data.rating.average,
          language: data.language,
          summary: data.summary,
          genres: data.genres || [noDate],
          premiered: data.premiered,
          ended: data.ended,
          officialSite: data.officialSite,
        });
      }
    },
    [isError, error, isSuccess, show]
  );

  useEffect(() => {
    data && getShowById(data);
  }, [data, getShowById]);

  const years = `${show.premiered ? show.premiered.slice(0, 4) : ''} ${show.ended ? '- ' + show.ended.slice(0, 4) : ''
    } `;

  return (
    <>
      {isLoading ? (
        <div className={style.loading} data-testid="spinner">
          <Spinner />
        </div>
      ) : (
        <div className={style.body} data-testid="details">
          <div className={style.details} data-testid="details-image">
            <div className={style.image}>
              {show.image ? (
                <img src={show.image} alt="cover" />
              ) : (
                <div className={style.cover}>My Best TV Show</div>
              )}
            </div>
            <div className={style.info}>
              <div className={style.name} data-testid="details-name">
                {show.name}
              </div>
              <div className={style.rating} data-testid="details-rating">
                <AiFillStar />
                {show.rating ? (
                  <span className={style.average}>{show.rating}</span>
                ) : (
                  <span className={style.average}>Not rated</span>
                )}
              </div>
              <div className={style.language}>Language: {show.language}</div>
              {show.genres && <div className={style.genres}>Genres: {show.genres.join(', ')}</div>}
              <div className={style.years}>{years}</div>
              {show.officialSite && (
                <a href={show.officialSite} className={style.link} target="_blank" rel="noreferrer">
                  <GoLinkExternal />
                  <span>Go to official site</span>
                </a>
              )}
            </div>
          </div>
          <div className={style.summary} data-testid="details-summary">
            <div dangerouslySetInnerHTML={{ __html: show.summary }} />
          </div>
          <button className="button" onClick={goBack}>
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default DetailsPage;
