import { ContentType } from '.';

const defaultStringsContent = {
  'splash/title': 'Holidays from around the world',
  'splash/button': 'Begin Exploring',
  exit: 'Exit Experience',
} as const;

const defaultContent: ContentType = {
  config: {
    autoExit: 60 * 5,
  },
  strings: defaultStringsContent,
  holidays: [
    {
      name: 'Chanukah',
      thumbnail: 'Chanukah.png',
      infographic: 'ChanukahInfographic.svg',
      description: [
        'Chanukah is the eight-day wintertime Jewish celebration known as the “Festival of Lights.”',
        'When the Jews liberated and reclaimed the Holy Temple, they found that the ritual oil available was only enough to last for one day—and it would take eight days to procure pure oil.',
        'Miraculously, the one-day supply of oil lasted eight days and nights, and the holiday of Chanukah was established.',
        'Normally, Chanukah occurs between late November and December. The exact dates change every year, because Chanukah is always on the 25th day of Kislev in the Hebrew calendar. Unlike the Gregorian calendar, the Hebrew calendar is based on both the Sun and the Moon.',
        'Chanukah comes from the Hebrew language. Since there is not an English transliteration, several different spellings exist: Hannukah, Chanukah, Hanukkah, Khanukka.',
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: 'The Menorah',
          thumbnail: 'Menorah.png',
          description: [
            'Menorah is the Hebrew word for lamp, and specifically refers to the seven-branched candelabrum that was used in the ancient Temple in Jerusalem.',
            'A Chanukah, however, has nine candlesticks — one for each night of Hanukkah and an extra, the shamash, to light the others.',
            'Thus, a hanukkiah, or Chanukah menorah, is a type of menorah; every hanukkiah is a menorah, but not every menorah is a hanukkiah.',
            'The candles are placed in the menorah from right to left but are lit from left to right.',
            'It is lit around nightfall each of the eight nights of Chanukah. Every night, another candle is added, so on the eighth night all eight candles, plus the shamash, are burning bright.',
          ],
          animation: 'Menorah.json',
        },
        {
          type: 'slideshow',
          direction: 'down',
          name: 'Challah',
          thumbnail: 'Challah.png',
          slides: [
            { graphic: 'slides/Challah-1.png', caption: '' },
            { graphic: 'slides/Challah-2.png', caption: '' },
            { graphic: 'slides/Challah-3.png', caption: '' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Dreidel',
          thumbnail: 'Dreidel.png',
          description: '',
          animation: 'Dreidel.json',
        },
      ],
    },
    {
      name: 'Winter Solstice',
      thumbnail: 'WinterSolstice.png',
      infographic: 'WinterSolsticeInfographic.svg',
      description: [
        'The winter solstice, also called hibernal solstice, is the day when the path of the Sun is farthest south in the Northern Hemisphere and farthest north in the Southern Hemisphere, creating a day that has the least daylight and the longest night. It takes place between December 20 and 23, depending on the year.',
        'Throughout history, societies across the world have held festivals and ceremonies marking the winter solstice the day of the "sun\'s rebirth." Usually, winter solstice celebrations honor the symbolism of fire and light, along with life, death, the rising sun, and the moon.',
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Stonehenge Gathering',
          thumbnail: 'stonehenge.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Stone Henge',
          thumbnail: 'YuleLog.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Stone Henge',
          thumbnail: 'Hopi.png',
          description: '',
          animation: '',
        },
      ],
    },
    {
      name: 'Kwanzaa',
      thumbnail: 'Kwanzaa.png',
      infographic: 'KwanzaaInfographic.svg',
      description: [
        'A celebration that honors the African heritage of African Americans, Kwanzaa is observed from Dec. 26th to Jan. 1st, and culminates in gift giving and a large feast.',
        'Kwanzaa is Swahili for "first" and signifies the first fruits of the harvest, when we share and enjoy the fruits of our labor and recommit ourselves to the collective achievement of a better life.',
        'Kwanzaa is rooted in both the cultural values and practices of Africa and North American attention to cultural authenticity and values for a meaningful, principled, and productive life. Kawaida, the philosophy out of which Kwanzaa is created, teaches that all people think and do should be based on tradition.',
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'Kinara.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'Umoja.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: '',
          description: '',
          animation: '',
        },
      ],
    },
    {
      name: 'ThreeKings',
      thumbnail: 'ThreeKings.png',
      infographic: 'ThreeKingsInfographic.svg',
      description: [
        'Also known as Epiphany, Theophany or El Dia de los Reyes’, Three Kings Day is a Christian feast day that celebrates the revelation of God in his Son as human in Jesus Christ. St. Epiphanius says Three Kings Day is hemera genethlion toutestin epiphanion, which translates to “Christ’s Birthday; that is, His Epiphany.”',
        'Three Kings Day is considered the end of Christmas celebrations, representing the day the Three Wise Men gave gifts to Jesus Christ. Parades, grand fests, and performances are typical on Three Kings Day. For families in Latinx communities, Three Kings Day is as important and widely celebrated as Christmas.',
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Gift Giving',
          thumbnail: 'GiftGiving.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'RoscaDeReyes.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'AlFresco.png',
          description: '',
          animation: '',
        },
      ],
    },
    {
      name: 'Christmas',
      thumbnail: 'Christmas.png',
      infographic: 'ChristmasInfographic.svg',
      description: [
        'Christmas is a Christian celebration of the birth of Jesus Christ, who Christians believe is the son of God. The name combines the words “Christ” and “mass,” which means the holy mass of Christ. Some believe Jesus may have been born later in the spring, and Pope Julius I chose Dec. 25 to adopt and absorb the Roman solstice traditions of Saturnalia.',
        'Christmas is celebrated with families coming together, decorations, gift giving, caring for one another, and going to church services. It is a time to reflect and reconcile, to celebrate and believe in miracles, and to wish for peace on Earth.',
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Christmas Tree',
          thumbnail: 'ChristmasTree.png',
          description:
            'The Christmas tree tradition can be traced back to Germany. On Dec. 24th, a guild put up a tree decorated with apples, wafers, and tinsel to celebrate the feast day of Adam and Eve. Another story says Martin Luther, inspired by the site of stars twinkling through tree branches, brought home an evergreen tree and decorated it with candles for his family.         ',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Nativity Scene',
          thumbnail: 'Nativity.png',
          description: [
            'The traditional Nativity scene is displayed at Christmas as a representation of the birth of Jesus Christ and those in attendance - including the Holy Family, angels, and the Three Kings.',
            'Begun by Saint Francis of Assisi in 1223, traditions include living Nativity scenes, often performed by children, and miniature figurine versions.',
          ],
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Santa Claus',
          thumbnail: 'Santa.png',
          description:
            'Santa Claus, also known as Father Christmas, Saint Nicholas, Kris Kringle, or simply Santa, is thought of as a jolly old elf in red who brings toys to good girls and boys for Christmas. Many believe Santa lives in the North Pole, with his eight reindeer, elves, and Mrs. Claus. The legend of Santa starts in the third century, when a man named Niklaus was famed for his fondness in gift giving. He was venerated as a saint in 800 A.D., became the patron saint of children, and is now more widely known as Saint Nicholas. The Dutch pronunciation of his name was Sinterklaas, which is recognizable as the origin of the name ‘Santa Claus.’',
          animation: '',
        },
      ],
    },
    {
      name: 'Diwali',
      thumbnail: 'Diwali.png',
      infographic: 'DiwaliInfographic.svg',
      description: [
        "Diwali, or Dipawali, is India's most widely celebrated holiday, marked by five days of festivities that include fireworks, colorful sand art called rangoli, and lavish feasting with family and friends. The five-day festival gets its name from the row (avali) of clay lamps or diyas (deepa) that Indians light outside their homes.",
        "During this holiday people get together, have parties, share gifts and pray for a prosperous future. Diwali's date is determined by the India calendar and changes every year. It is observed on the 15th day of the 8th month (Kartik) in India's calendar. The day is an Amavasya or 'new moon day'.  While originally a Hindu festival, over the centuries Diwali has come to be celebrated by Jains and Sikhs. But no matter who is observing, the festival symbolizes the victory of light over darkness. ",
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'AcrossAsia.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'Sweets.png',
          description: '',
          animation: '',
        },
        {
          type: 'textLeft',
          direction: 'left',
          name: '',
          thumbnail: 'Diyas.png',
          description: '',
          animation: '',
        },
      ],
    },
  ],
};

export { defaultStringsContent };
export default defaultContent;
