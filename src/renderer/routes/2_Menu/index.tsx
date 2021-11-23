import { motion } from 'framer-motion';
import { chain, map } from 'lodash';
import React from 'react';
import { useNavigate } from 'react-router';
import { Holiday, useContent } from '/@/components/Content';
import Exit from '/@/components/Exit';
import Graphic from '/@/components/Graphic';

const HolidayItem = (props: { index: number; holiday: Holiday }) => {
  const { index, holiday } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/holiday/${index}`)}
      className="flex-1 flex justify-center items-center cursor-pointer"
    >
      <Graphic className={'max-w-[85%] max-h-[70%]'} src={holiday.thumbnail} />
    </div>
  );
};

const MenuPage = () => {
  const holidays = useContent((c) => c.holidays);

  return (
    <>
      <div className="flex-1 flex flex-col w-full divide-y-0.16vw divide-white">
        {chain(holidays)
          .map((h, i) => [h, i] as const)
          .chunk(3)
          .map((holidayChunk, r) => (
            <div
              className="flex-1 flex flex-row divide-x-0.16vw divide-white"
              key={r}
            >
              {map(holidayChunk, ([holiday, i]) => (
                <HolidayItem key={i} holiday={holiday} index={i} />
              ))}
            </div>
          ))
          .value()}
      </div>
      <Graphic
        className="absolute left-0 bottom-0 w-full pointer-events-none"
        src="/MenuOverlay.png"
      />
      <Exit />
    </>
  );
};

export default MenuPage;
