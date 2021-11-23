import { motion } from 'framer-motion';
import React from 'react';
import { Holiday, Tradition } from '/@/components/Content';
import Snow from '/@/components/Snow';
import Slideshow from './Slideshow';
import { map } from 'lodash';
import Graphic from '/@/components/Graphic';

const Popup = (props: {
  holiday: Holiday;
  tradition: Tradition;
  onClose?: () => void;
}) => {
  const { onClose, holiday, tradition } = props;
  const { direction, type } = tradition;

  return (
    <motion.div
      variants={{
        open: {
          x: '0%',
          y: '0%',
        },
        closed: {
          x:
            direction === 'right'
              ? '100%'
              : direction === 'left'
              ? '-100%'
              : '0%',
          y:
            direction === 'up' ? '100%' : direction === 'down' ? '-100%' : '0%',
        },
      }}
      transition={{ duration: 0.6 }}
      initial="closed"
      animate="open"
      exit="closed"
      className={`absolute flex inset-0 backdrop-filter backdrop-blur-2vw z-30 ${
        type === 'textRight'
          ? 'bg-gradient-to-r to-white via-transparent from-transparent'
          : type === 'textLeft'
          ? 'bg-gradient-to-l to-white via-transparent from-transparent'
          : type === 'slideshow' && 'bg-gradient-to-t to-white from-transparent'
      }`}
    >
      <Snow />
      {(type === 'textRight' || type === 'textLeft') && (
        <div
          className={`flex-1 flex ${
            type === 'textRight' ? 'flex-row-reverse' : 'flex-row'
          }`}
        >
          <div
            className={`py-2.7vw px-2.7vw border-white ${
              type === 'textRight'
                ? 'border-l-0.16vw w-32vw'
                : 'border-r-0.16vw w-32vw'
            }`}
          >
            <h2 className="text-size-2vw font-semibold">{holiday.name}</h2>
            <h3 className="mt-2vw text-size-3.8vw max-w-21vw font-light">
              {tradition.name}
            </h3>
            <div className="mt-2vw text-size-1vw leading-1.4vw space-y-1vw">
              {map(
                Array.isArray(tradition.description)
                  ? tradition.description
                  : [tradition.description],
                (s, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: s }} />
                ),
              )}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center relative z-10">
            <Graphic
              className="min-h-[60%] min-w-[60%] max-w-[95%] max-h-[80%] object-contain"
              src={
                tradition.animation ? tradition.animation : tradition.thumbnail
              }
            />
          </div>
        </div>
      )}
      {type === 'slideshow' && (
        <div className="flex-1 flex justify-center items-center">
          <div className="absolute left-2.7vw top-2.7vw">
            <h2 className="text-size-1.7vw font-semibold">{holiday.name}</h2>
            <h3 className="mt-0.5vw text-size-3.6vw font-light max-w-18vw">
              {tradition.name}
            </h3>
          </div>
          <Slideshow tradition={tradition} />
        </div>
      )}
      <div
        className={`cursor-pointer absolute top-2.7vw z-10 ${
          type === 'textRight' ? 'left-2.7vw' : 'right-2.7vw'
        }`}
        onClick={onClose}
      >
        <Graphic className="w-2.5vw h-2.5vw" src="CloseIcon.svg" />
      </div>
      <Graphic
        className="absolute left-0 bottom-0 w-full pointer-events-none"
        src="/HolidayOverlay.png"
      />
    </motion.div>
  );
};

export default Popup;
