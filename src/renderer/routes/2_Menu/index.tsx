import { times } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router';
import Exit from '/@/components/Exit';

const HolidayItem = (props: { index: number }) => {
  const { index } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate('/holiday')}
      className="flex justify-center items-center"
    >
      {index}
    </div>
  );
};

const MenuPage = () => {
  return (
    <>
      <div className="flex-1 w-full grid grid-cols-3 grid-rows-2 divide-x-0.16vw divide-y-0.16vw divide-white">
        {times(6, (i) => (
          <HolidayItem key={i} index={i} />
        ))}
      </div>
      <Exit />
    </>
  );
};

export default MenuPage;
