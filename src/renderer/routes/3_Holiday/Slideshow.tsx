import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Tradition } from '/@/components/Content';
import { clamp, map } from 'lodash';
import Graphic from '/@/components/Graphic';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-100%',
      y: '-50%',
    };
  },
  center: {
    zIndex: 1,
    x: '0%',
    y: '-50%',
    transition: {
      ease: 'easeOut',
    },
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      y: '-50%',
      transition: {
        ease: 'easeOut',
      },
    };
  },
};

const Slideshow = (props: { tradition: Tradition & { type: 'slideshow' } }) => {
  const { tradition } = props;

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    setPage([
      clamp(page + newDirection, 0, tradition.slides.length - 1),
      newDirection,
    ]);
  };

  const hasPrev = useMemo(() => page - 1 >= 0, [page]);
  const hasNext = useMemo(() => page + 1 < tradition.slides.length, [page]);

  return (
    <div className="flex flex-row items-center space-x-4.5vw">
      <div
        className={hasPrev ? 'cursor-pointer' : 'opacity-20'}
        onClick={() => paginate(-1)}
      >
        <Graphic className={'w-3.3vw h-3.3vw'} src={'LeftCaretIcon.svg'} />
      </div>
      <div className="w-55vw relative">
        <div className="rounded-2.7vw bg-[#aedee2] w-full overflow-hidden">
          <div className="h-28vw relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <Graphic
                  className="absolute inset-0 overflow-hidden object-fill"
                  src={tradition.slides[page].graphic}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          {tradition.description && (
            <div className="px-3vw py-2vw text-size-1vw leading-1.4vw space-y-0.5vw">
              {map(
                Array.isArray(tradition.description)
                  ? tradition.description
                  : [tradition.description],
                (s, i) => (
                  <p key={i} dangerouslySetInnerHTML={{ __html: s }} />
                ),
              )}
            </div>
          )}
        </div>
      </div>
      <div
        className={hasNext ? 'cursor-pointer' : 'opacity-20'}
        onClick={() => paginate(1)}
      >
        <Graphic className={'w-3.3vw h-3.3vw'} src={'RightCaretIcon.svg'} />
      </div>
    </div>
  );
};

export default Slideshow;
