export type TMenuitems = {
  title: string;
  url: string | undefined;
  submenu?: TMenuitems[];
};

export const menuItemsList: TMenuitems[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Datamuse',
    url: '/datamuse',
    submenu: [
      {
        title: 'Synonym',
        url: '/synonym',
      },
      {
        title: 'Antonym',
        url: '/antonym',
      },
      {
        title: 'Rhymes',
        url: '/rhymes',
      },
    ],
  },
];
