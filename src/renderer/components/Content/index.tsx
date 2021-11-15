import { merge } from 'lodash';
import React, { ReactNode, useEffect, useState } from 'react';
import { createContext, useContextSelector } from 'use-context-selector';

type TraditionSlide = {
  graphic: string;
  caption: string;
};
type Tradition =
  | {
      type: 'textLeft' | 'textRight';
      direction: 'left' | 'right' | 'up' | 'down';
      name: string;
      graphic: string;
      description: string[] | string;
    }
  | {
      type: 'slideshow';
      direction: 'left' | 'right' | 'up' | 'down';
      name: string;
      graphic: string;
      slides: TraditionSlide[];
    };
type Holiday = {
  name: string;
  graphic: string;
  description: string[] | string;
  traditions: Tradition[];
};

const lorem = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
gravida malesuada felis, eu vehicula massa mollis eu. Maecenas
augue enim, posuere ut justo scelerisque, aliquet rhoncus quam.
Etiam convallis congue augue, ut ullamcorper nisl commodo dapibus.
Aliquam erat volutpat. Maecenas sed ipsum diam. Nulla facilisi.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas.`,
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
gravida malesuada felis, eu vehicula massa mollis eu. Maecenas
augue enim, posuere ut justo scelerisque, aliquet rhoncus quam.
Etiam convallis congue augue, ut ullamcorper nisl commodo dapibus.
Aliquam erat volutpat. Maecenas sed ipsum diam. Nulla facilisi.
Pellentesque habitant morbi tristique senectus et netus et
malesuada fames ac turpis egestas.`,
];

const defaultStringsContent = {
  'splash/title': 'Holidays from around the world',
  'splash/button': 'Begin Exploring',
  exit: 'Exit Experience',
} as const;

type ContentContextType = {
  content: {
    config: {
      autoExit: number;
    };
    strings: typeof defaultStringsContent;
    holidays: Holiday[];
  };
};
const defaultContentContext: ContentContextType = {
  content: {
    config: {
      autoExit: 60,
    },
    strings: defaultStringsContent,
    holidays: [
      {
        name: 'Hanukkah',
        graphic: 'hannukuh.json',
        description: lorem,
        traditions: [
          {
            type: 'textLeft',
            direction: 'left',
            name: 'The Menorah',
            graphic: 'menorah.json',
            description: lorem,
          },
          {
            type: 'slideshow',
            direction: 'down',
            name: 'Challah',
            graphic: 'challah.json',
            slides: [
              { graphic: 'challah1.png', caption: lorem[0] },
              { graphic: 'challah2.png', caption: lorem[0] },
            ],
          },
          {
            type: 'textRight',
            direction: 'right',
            name: 'Dreidel',
            graphic: 'dreidel.json',
            description: lorem,
          },
        ],
      },
    ],
  },
};
const ContentContext = createContext(defaultContentContext);

const ContentProvider = (props: { children?: ReactNode }) => {
  const { children } = props;
  const [content, setContent] = useState<
    ContentContextType['content'] | undefined
  >(undefined);

  useEffect(() => {
    fetch('/content.json').then(async (response) =>
      setContent(
        merge({}, defaultContentContext.content, await response.json()),
      ),
    );
  }, [setContent]);

  if (!content) return 'Loading';

  return (
    <ContentContext.Provider
      value={{
        content,
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

export type { ContentContextType, Holiday, Tradition, TraditionSlide };
export { ContentContext, useContent, useStrings };
export default ContentProvider;
