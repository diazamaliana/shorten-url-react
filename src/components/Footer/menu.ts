import { IMenu } from 'types/menu';

export const MENUS: IMenu[] = [
  {
    title: 'Features',
    subMenu: [
      { title: 'Link Shortening', path: '/' },
      { title: 'Branded Links', path: '/' },
      { title: 'Analytics', path: '/' },
    ],
  },
  {
    title: 'Resources',
    subMenu: [
      { title: 'Blog', path: '/' },
      { title: 'Developers', path: '/' },
      { title: 'Support', path: '/' },
    ],
  },
  {
    title: 'Company',
    subMenu: [
      { title: 'About', path: '/' },
      { title: 'Our Team', path: '/' },
      { title: 'Careers', path: '/' },
      { title: 'Contacts', path: '/' },
    ],
  },
];
