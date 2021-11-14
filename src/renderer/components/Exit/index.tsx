import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import t from '/@/util/t';

export const useAutoExit = (time = 30) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!time) return;

    let timer: NodeJS.Timeout;

    const resetTimer = () => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        navigate('/');
      }, time * 1000);
    };

    //start timer
    resetTimer();

    //listen for anything to reset timer
    const listener = () => {
      resetTimer();
    };
    document.addEventListener('mousemove', listener);
    document.addEventListener('mousedown', listener);
    document.addEventListener('keydown', listener);
    return () => {
      document.removeEventListener('mousemove', listener);
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('keydown', listener);
      clearTimeout(timer);
    };
  }, [time]);
};

const Exit = (props: { autoExit?: number }) => {
  const { autoExit } = props;
  const navigate = useNavigate();

  useAutoExit(autoExit);

  return (
    <div className="absolute left-0 bottom-0">
      <div
        className="m-5 cursor-pointer"
        onClick={() => {
          navigate('/');
        }}
      >
        {t('exit')}
      </div>
    </div>
  );
};

export default Exit;
