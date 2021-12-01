import { IContent, ICard } from 'types/content';
import brandRecognition from 'assets/icons/icon-brand-recognition.svg';
import detailedRecords from 'assets/icons/icon-detailed-records.svg';
import fullyCustomizable from 'assets/icons/icon-fully-customizable.svg';

export const content: IContent = {
  title: 'Advanced Statistics',
  text: 'Track how your links are performing across the web with our advanced statistics dashboard.',
};

export const CARDS: ICard[] = [
  {
    title: 'Brand Recognition',
    src: brandRecognition,
    description: `Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instill confidence in your content.`,
  },
  {
    title: 'Detailed Records',
    src: detailedRecords,
    description: `Gain insights into who is clicking your site. Knowing when and where people engage your content helps inform better decisions.`,
  },
  {
    title: 'Fully Customizable',
    src: fullyCustomizable,
    description: `Improve brand awareness and content discoverability through customizable links, superchanging audience engagement.`,
  },
];
