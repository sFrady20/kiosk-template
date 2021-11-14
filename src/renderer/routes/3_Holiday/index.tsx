import { times } from 'lodash';
import React from 'react';
import Exit from '/@/components/Exit';

const TraditionItem = (props: { index: number }) => {
  const { index } = props;

  return <div className="flex justify-center items-center">{index}</div>;
};

const HolidayPage = () => {
  return (
    <>
      <div className="flex-1 flex flex-row w-full divide-x-0.16vw divide-white">
        <div className="w-29vw">Hannukah</div>
        <div className="flex-1 w-full grid grid-cols-3 grid-rows-2 divide-x-0.16vw divide-y-0.16vw divide-white">
          {times(6, (i) => (
            <TraditionItem key={i} index={i} />
          ))}
        </div>
        <Exit />
      </div>
    </>
  );
};

export default HolidayPage;
