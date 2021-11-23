import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion, MotionProps } from 'framer-motion';
import { Tradition, TraditionSlide } from '/@/components/Content';
import { clamp } from 'lodash';
import Graphic from '/@/components/Graphic';

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? '100%' : '-200%',
      y: '-50%',
    };
  },
  center: {
    zIndex: 1,
    x: '-50%',
    y: '-50%',
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? '100%' : '-200%',
      y: '-50%',
    };
  },
};

const SlideItem = (props: MotionProps & { slide: TraditionSlide }) => {
  const { slide, ...innerProps } = props;
  const { graphic, caption } = slide;
  return (
    <motion.div
      {...innerProps}
      variants={variants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
      className="rounded-2.7vw bg-[#aedee2] overflow-hidden absolute left-1/2 top-1/2 w-full"
    >
      <div className="h-27vw relative">
        <Graphic
          className="absolute left-0 top-0 w-full h-full overflow-hidden object-fill"
          src={graphic}
        />
      </div>
      {caption && (
        <div className="px-3vw py-3vw text-size-1.3vw">{caption}</div>
      )}
    </motion.div>
  );
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
        <AnimatePresence initial={false} custom={direction}>
          <SlideItem
            key={page}
            custom={direction}
            slide={tradition.slides[page]}
          />
        </AnimatePresence>
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
