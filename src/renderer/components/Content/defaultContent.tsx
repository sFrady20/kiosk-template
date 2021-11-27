import { ContentType } from '.';

const defaultStringsContent = {
  'splash/title': 'Holidays from around the world',
  'splash/button': 'Tap to begin',
  exit: 'Exit Experience',
} as const;

const defaultContent: ContentType = {
  config: {
    autoExit: 60 * 5,
    transitionDuration: 0.8,
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
          name: 'Menorah',
          thumbnail: 'Menorah.png',
          description: [
            'Menorah is the Hebrew word for lamp, and specifically refers to the seven-branched candelabrum that was used in the ancient Temple in Jerusalem.',
            'A Chanukah, however, has nine candlesticks — one for each night of Hanukkah and an extra, the shamash, to light the others.',
            'Thus, a hanukkiah, or Chanukah menorah, is a type of menorah; every hanukkiah is a menorah, but not every menorah is a hanukkiah.',
            'The candles are placed in the menorah from right to left but are lit from left to right.',
            'It is lit around nightfall each of the eight nights of Chanukah. Every night, another candle is added, so on the eighth night all eight candles, plus the shamash, are burning bright.',
          ],
          animation: 'Menorah-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Challah',
          thumbnail: 'Challah.png',
          description:
            'Derived from the Hebrew word for “portion,” Challah is the Sabbath‑and‑holiday bread. On festive occasions, a blessing is said over two Challah loaves, symbolizing the two portions of the manna that was distributed on Fridays to the children of Israel during their exodus from Egypt.',
          slides: [
            {
              graphic: 'slides/Challah-1.png',
            },
            { graphic: 'slides/Challah-2.png' },
            { graphic: 'slides/Challah-3.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Dreidel',
          thumbnail: 'Dreidel.png',
          description: [
            'Dreidel is Yiddish for "spinning top," and is a four-sided top that can be made to spin on its pointed base.',
            ' The four Hebrew letters on each side form the acronym of the phrase: Nes gadol hayah sham, "a great miracle happened there," a reference to the Chanukah miracle.',
            `How to play:
            <ul class="space-y-1vw my-1vw list-disc list-inside">
              <li>Each player begins with an equal number of game pieces.</li>
              <li>Each round starts with every participant putting one game piece into the center of the game.</li>
              <li>On your turn, you spin the dreidel. Depending on the side it lands on, you give or get game pieces from the center of the game.</li>
              <li>When one person has won everything, that round of the game is over! Winners often receive chocolate coins called gelt.</li>
            </ul>`,
          ],
          animation: 'Dreidel-Loop.webm',
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
          description:
            'While no one knows exactly how or why the ancient circle of Stonehenge was built, it is known that it lines up with the movements of the sun. Archaeological research suggests winter solstice festivals happened at Stonehenge - and have continued as modern revelers have taken up the tradition, gathering at dawn the day after the longest night of the year - this year, December 21. Visitors can walk right up to the stones, an area usually roped off, for this peaceful and sacred celebration.',
          animation: 'StoneHenge-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Yule Log',
          thumbnail: 'YuleLog.png',
          description:
            "This tradition is believed to have originated from the Scandinavian Feast of Juul, when fires were lit to symbolize the heat and light of the Sun. The Yule Log was originally an entire, carefully chosen tree, lit from the remains of the previous year's log. Now, burning Yule logs are shown on TV and inspire log-shaped desserts.",
          slides: [
            {
              graphic: 'slides/YuleLog-1.png',
            },
            { graphic: 'slides/YuleLog-2.png' },
            { graphic: 'slides/YuleLog-3.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Soyal',
          thumbnail: 'Hopi.png',
          description:
            'The indigenous Hopi people of present-day northern Arizona celebrate the winter solstice as part of their religious tradition of Kachina (or Katsina), which are spirits representing the natural world. The Soyal solstice ceremony, led by a tribal chief, celebrates December as when the Kachinas come down from their home in the San Francisco Peaks to bring the sun back to the world with ritual dancing. The festivities include gift-giving to children, prayers for the coming year, singing, and storytelling. At Soyal time, elders pass down stories that teach pivotal lessons, such as respecting others. The Hopi, also known as The Peaceful Ones (Hopitu Shinumu), believe everything that will occur during the year is arranged at Soyal.',
          animation: 'Soyal-Loop.webm',
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
          name: 'The candle lighting ceremony',
          thumbnail: 'Kinara.png',
          description:
            'The candle-lighting ceremony, central to the celebration of Kwanzaa, takes place when all members of a family are present. Children take an active role in all activities. Kwanzaa is represented by three symbolic colors: Black, for the color of African peoples everywhere, is the center candle. Three red candles represent the blood of the ancestors and are placed to the left of the black candle. Three green candles that symbolize the earth, life, and the ideas and promise of the future, are placed to the right. Beginning Dec. 26 with the black mushumaa, a different candle is lit each day, alternating from left to right. After the candle lighting, the principle of the day is discussed.',
          animation: 'CandleLighting-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Karamu Ya Imani',
          thumbnail: 'Karamu.png',
          description:
            'The Feast on Dec. 31st is influenced by African, Caribbean, and South American cuisines. Black-eyed peas and collard greens are featured to represent good luck and money. Fasting is often done as a means of cleansing of the mind, soul, and spirit.',
          slides: [
            {
              graphic: 'slides/Karamu-1.png',
            },
            { graphic: 'slides/Karamu-2.png' },
            { graphic: 'slides/Karamu-3.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'The 7 Principles of Kwanzaa',
          thumbnail: '7Principles.png',
          description: `<ol class="list-decimal list-outside ml-1vw space-y-1vw">
              <li>Unity: Umoja<br />(oo–MO–jah)</li>
              <li>Self-determination: Kujichagulia<br />(koo–gee–cha–goo–LEE–yah)</li>
              <li>Collective Work and Responsibility: Ujima<br />(oo–GEE–mah)</li>
              <li>Cooperative Economics: Ujamaa<br />(oo–JAH–mah)</li>
              <li>Purpose: Nia<br />(nee–YAH)</li>
              <li>Creativity: Kuumba<br />(koo–OOM–bah)</li>
              <li>Faith: Imani<br />(ee–MAH–nee)</li>
            </ol>`,
          animation: '7Principles-Loop.webm',
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
          name: 'The first is the act of gift-giving',
          thumbnail: 'GiftGiving.png',
          description: [
            'Also known as Epiphany, Theophany or El Dia de los Reyes’, Three Kings Day is a Christian feast day that celebrates the revelation of God in his Son as human in Jesus Christ. St. Epiphanius says Three Kings Day is hemera genethlion toutestin epiphanion, which translates to “Christ’s Birthday; that is, His Epiphany.”',
            'Three Kings Day is considered the end of Christmas celebrations, representing the day the Three Wise Men gave gifts to Jesus Christ. Parades, grand fests, and performances are typical on Three Kings Day. For families in Latinx communities, Three Kings Day is as important and widely celebrated as Christmas.',
          ],
          animation: 'GiftGiving-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Rosca De Reyes',
          thumbnail: 'RoscaDeReyes.png',
          description:
            'Rosca de Reyes – or King’s Cake - is a symbolic pastry shaped in a circle and decorated with candied fruit to signify a king’s crown. This sweet bread holds a special surprise inside: a small baby Jesus figurine. Whoever finds this token is obligated to host a party for Dia de la Condelaria (Candlemas Day).',
          slides: [
            { graphic: 'slides/Rosca-de-reyes-1.png' },
            { graphic: 'slides/Rosca-de-reyes-2.png' },
            { graphic: 'slides/Rosca-de-reyes-3.png' },
            { graphic: 'slides/Rosca-de-reyes-4.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Al fresco feast',
          thumbnail: 'AlFresco.png',
          description: [
            'At its core, Three Kings Day is a feast day. In Latin American countries, this feast is enjoyed al fresco (outdoors). Traditional dishes include black beans and rice; soups and salads that feature yucca, nopales, and plantains; and a slow-cooked meat sautéed with onions, garlic, and herbs.',
            "During celebration services on the eve of the feast and on the feast day, water is blessed. This is to remember Jesus's baptism. The blessed water is used in church services during the rest of the year. People are often baptized on the Feast of the Holy Theophany.",
          ],
          animation: 'AlFresco-Loop.webm',
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
          animation: 'ChristmasTree-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Nativity Scene',
          thumbnail: 'Nativity.png',
          description: [
            'The traditional Nativity scene is displayed at Christmas as a representation of the birth of Jesus Christ and those in attendance - including the Holy Family, angels, and the Three Kings.',
            'Begun by Saint Francis of Assisi in 1223, traditions include living Nativity scenes, often performed by children, and miniature figurine versions.',
          ],
          slides: [
            { graphic: 'slides/Nativity-1.png' },
            { graphic: 'slides/Nativity-2.png' },
            { graphic: 'slides/Nativity-3.png' },
            { graphic: 'slides/Nativity-4.png' },
            { graphic: 'slides/Nativity-5.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Santa Claus',
          thumbnail: 'Santa.png',
          description:
            'Santa Claus, also known as Father Christmas, Saint Nicholas, Kris Kringle, or simply Santa, is thought of as a jolly old elf in red who brings toys to good girls and boys for Christmas. Many believe Santa lives in the North Pole, with his eight reindeer, elves, and Mrs. Claus. The legend of Santa starts in the third century, when a man named Niklaus was famed for his fondness in gift giving. He was venerated as a saint in 800 A.D., became the patron saint of children, and is now more widely known as Saint Nicholas. The Dutch pronunciation of his name was Sinterklaas, which is recognizable as the origin of the name ‘Santa Claus.’',
          animation: 'Santa-Loop.webm',
        },
      ],
    },
    {
      name: 'Diwali',
      thumbnail: 'Diwali.png',
      infographic: 'DiwaliInfographic.svg',
      description: [
        "Diwali, or Dipawali, is India's most important holiday of the year. The five-day festival gets its name from the row (avali) of clay lamps or diyas (deepa) that are lit outside of homes during this Hindu festival. The festival of light symbolizes the victory of light over darkness but is observed differently throughout Asia. During this holiday people get together, have parties, exchange gifts, and generally pray for a prosperous future. Diwali is observed on the 15th day of the eighth month (Kartik) of the Hindu calendar and changes every year. The day is an Amavasya or 'new moon day.'",
      ],
      traditions: [
        {
          type: 'textLeft',
          direction: 'left',
          name: 'Throughout Asia',
          thumbnail: 'AcrossAsia.png',
          description: [
            'Lakshmi is the goddess of wealth, fortune, and prosperity. It is believed on Diwali night, Goddess Lakshmi visits each house to bless her devotees with great wealth and luxuries.',
            'Northern India celebrates the story of Lord Rama’s victory over King Ravana and his return to Ayodhya with his wife Sita and brother Lakshman after spending 14 years in exile.',
            'Southern India celebrates the day that Lord Krishna defeated the demon Narakasura.',
            'Western India celebrates the day that Lord Vishnu, the Preserver (one of the main gods of the Hindu trinity) sent the demon King Bali to rule the nether world.',
            'In West Bengal and eastern India, Diwali is celebrated to welcome the arrival of Maa Kali, avatar of Goddess Durga.',
          ],
          animation: 'AcrossAsia-Loop.webm',
        },
        {
          type: 'slideshow',
          direction: 'up',
          name: 'Sweets',
          thumbnail: 'Sweets.png',
          description:
            'Sharing delicious mithai (sweets made from flour, milk, sugar, and nuts) with family and friends celebrates the triumph of good over evil. Ten days prior to the start of the holiday, families start to prepare a variety of traditional sweets including barfi, gulab jamun, and ladoo.',
          slides: [
            {
              graphic: 'slides/Sweets-1.png',
            },
            { graphic: 'slides/Sweets-2.png' },
            { graphic: 'slides/Sweets-3.png' },
          ],
        },
        {
          type: 'textRight',
          direction: 'right',
          name: 'Diyas',
          thumbnail: 'Dia.png',
          description:
            'A diya is made from clay and has a cotton wick dipped in ghee or vegetable oil. The light represents moving from darkness into the light. The oil in the diya symbolizes negatives in the human mind. The wick is symbolic of the atma. The lighting of diyas signifies getting rid of selfish thoughts. Diya is essential in Hinduism because it signifies purity, goodness, good luck, and power. The presence of light means the nonexistence of darkness and evil forces. Diwali is celebrated on the new moon day when there is supreme darkness everywhere. Lighting the lamp in homes during puja removes the darkness from the mind and heart.',
          animation: 'Dia-Loop.webm',
        },
      ],
    },
  ],
};

export { defaultStringsContent };
export default defaultContent;
