import React from 'react';
import style from './NotFound.module.scss';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className={style.body}>
      <div className={style.items}>
        <span className={style.item}>4</span>
        <span className={style.item}>0</span>
        <span className={style.item}>4</span>
      </div>
      <p className={style.text}>Oh, man. Page not found</p>
      <button className="button" onClick={goBack}>
        Go back
      </button>
    </div>
  );
};

export default NotFound;
