import React, { useMemo } from 'react';
import Lottie from 'react-lottie';
import { toGraphicUrl, useLottieData } from '../Content';

const LottieWrapper = (props: { src?: string; className?: string }) => {
  const { src } = props;
  if (!src) return <>{src}</>;

  const animationData = useLottieData(src);

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: { progressiveLoad: true },
      }}
      isClickToPauseDisabled={true}
    />
  );
};

const Graphic = (props: { src?: string; className?: string }) => {
  const { src = '', className } = props;

  const isLottie = useMemo(() => /\.(json|lottie)$/i.test(src), [src]);
  const isImage = useMemo(() => /\.(png|jpg|jpeg|gif|svg)$/i.test(src), [src]);
  const isVideo = useMemo(() => /\.(mp4|mov|webm)$/i.test(src), [src]);

  const sanitizedSrc = toGraphicUrl(src);

  return isLottie ? (
    <LottieWrapper src={sanitizedSrc} />
  ) : isVideo ? (
    <video
      width="100%"
      height="100%"
      className={className}
      src={sanitizedSrc}
      controls={false}
      autoPlay={true}
      muted={true}
    />
  ) : isImage ? (
    <img draggable={false} className={className} src={sanitizedSrc} />
  ) : (
    <>{sanitizedSrc}</>
  );
};

export default Graphic;
