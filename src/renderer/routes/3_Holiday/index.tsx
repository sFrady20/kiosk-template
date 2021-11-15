import { AnimatePresence } from 'framer-motion';
import { times, map, chain } from 'lodash';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Exit from '/@/components/Exit';
import Popup from './Popup';
import { Tradition, useContent } from '/@/components/Content';

const TraditionItem = (props: {
  tradition: Tradition;
  onClick?: () => void;
}) => {
  const { tradition, onClick } = props;

  return (
    <div
      className="flex-1 flex justify-center items-center cursor-pointer"
      onClick={onClick}
    >
      {tradition.graphic}
    </div>
  );
};

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <div
      className="absolute right-2.7vw top-2.7vw cursor-pointer"
      onClick={() => navigate('/menu')}
    >
      Globe
    </div>
  );
};

const HolidayPage = () => {
  const [selectedTradition, setSelection] = useState<Tradition | undefined>(
    undefined,
  );

  const { holidayIndex } = useParams();
  const holiday = useContent((c) => c.holidays[parseInt(holidayIndex || '0')]);

  return (
    <>
      <div className="flex-1 flex flex-row w-full divide-x-0.16vw divide-white">
        <div className="w-29vw p-2.7vw">
          <h3 className="mt-0.5vw text-size-3.5vw font-light">
            {holiday.name}
          </h3>
          <div className="mt-2vw text-size-1.1vw leading-1.4vw space-y-2vw">
            {map(
              Array.isArray(holiday.description)
                ? holiday.description
                : [holiday.description],
              (s) => (
                <p>{s}</p>
              ),
            )}
          </div>
        </div>
        <div className="flex-1 flex flex-col divide-y-0.16vw divide-white ">
          {chain(holiday.traditions)
            .map((t, i) => [t, i] as const)
            .chunk(3)
            .map((traditionChunk, r) => (
              <div
                className="flex-1 flex flex-row divide-x-0.16vw divide-white"
                key={r}
              >
                {map(traditionChunk, ([tradition, i]) => (
                  <TraditionItem
                    key={i}
                    tradition={tradition}
                    onClick={() => setSelection(tradition)}
                  />
                ))}
              </div>
            ))
            .value()}
        </div>
      </div>
      <AnimatePresence>
        {selectedTradition && (
          <Popup
            key={`${holiday.name}__${selectedTradition.name}`}
            onClose={() => setSelection(undefined)}
            holiday={holiday}
            tradition={selectedTradition}
          />
        )}
      </AnimatePresence>
      <BackButton />
      <Exit />
    </>
  );
};

export default HolidayPage;
