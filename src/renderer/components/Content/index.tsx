import { filter, flatMap, merge } from 'lodash';
import React, { ReactNode, useEffect, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';
import defaultContent, { defaultStringsContent } from './defaultContent';

type TraditionSlide = {
  graphic: string;
  caption?: string;
};
type Tradition =
  | {
      type: 'textLeft' | 'textRight';
      direction: 'left' | 'right' | 'up' | 'down';
      name: string;
      thumbnail: string;
      description: string[] | string;
      animation: string;
    }
  | {
      type: 'slideshow';
      direction: 'left' | 'right' | 'up' | 'down';
      name: string;
      thumbnail: string;
      description: string[] | string;
      slides: TraditionSlide[];
    };
type Holiday = {
  name: string;
  thumbnail: string;
  infographic: string;
  description: string[] | string;
  traditions: Tradition[];
};

const toGraphicUrl = (url: string) => {
  //trim
  url = url.replaceAll(/(^[\/\\]|[\/\\]$)/gi, '');

  //url
  url = `/graphics/${url}`;

  return url;
};

type ContentType = {
  config: {
    autoExit: number;
    transitionDuration: number;
  };
  strings: typeof defaultStringsContent;
  holidays: Holiday[];
};

type ContentContextType = {
  content: ContentType;
  lotties: {
    [s: string]: any;
  };
};
const defaultContentContext: ContentContextType = {
  content: defaultContent,
  lotties: [],
};
const ContentContext = createContext(defaultContentContext);

const ContentProvider = (props: { children?: ReactNode }) => {
  const { children } = props;
  const [[content, lotties], setContent] = useState<
    [ContentType | undefined, { [s: string]: any } | undefined]
  >([undefined, undefined]);

  useEffect(() => {
    (async () => {
      const loadedContent = await (await fetch('/content.json')).json();

      const newContent: ContentType = merge(
        {},
        defaultContentContext.content,
        loadedContent,
      );

      const lotties: { [s: string]: any } = {};
      const lottieFields: string[] = filter(
        [
          ...flatMap(newContent.holidays, (h) => [h.thumbnail, h.infographic]),
          ...flatMap(newContent.holidays, (h) =>
            flatMap(h.traditions, (t) =>
              t.type === 'textLeft' || t.type === 'textRight'
                ? [t.thumbnail, t.animation]
                : [t.thumbnail],
            ),
          ),
        ],
        (s) => /\.(json|lottie)$/gi.test(s),
      );

      let field: string;
      for (let i = 0; i < lottieFields.length; ++i) {
        try {
          field = toGraphicUrl(lottieFields[i]);
          lotties[field] = await (await fetch(field)).json();
        } catch (err) {}
      }

      setContent([newContent, lotties]);
    })();
  }, [setContent]);

  if (!content || !lotties) return <>Loading</>;

  return (
    <ContentContext.Provider
      value={{
        content,
        lotties,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

function useContent<T>(
  selector: (content: ContentContextType['content']) => T,
) {
  return useContextSelector(ContentContext, (c) => selector(c.content));
}
function useStrings<T>(
  selector: (content: ContentContextType['content']['strings']) => T,
) {
  return useContextSelector(ContentContext, (c) => selector(c.content.strings));
}
const useLottieData = (src: string) =>
  useContextSelector(ContentContext, (c) => c.lotties[src]);

export type {
  ContentContextType,
  ContentType,
  Holiday,
  Tradition,
  TraditionSlide,
};
export { ContentContext, useContent, useStrings, useLottieData, toGraphicUrl };
export default ContentProvider;
