import { HTMLProps } from 'react';

export enum Lang {
  'fr' = 'fr',
  'en' = 'en',
}

export type Translation<T = string> = Record<Lang, T>;

export type CalendarEvent = {
  date: string;
  link: string;
  location: string;
  title: string;
  type: string;
};

export type Album = {
  img: string;
  link?: string;
  spotifyLink?: string;
  releaseDate?: Translation;
  title: string;
};

type ContactAgent = {
  company: string;
  email: string;
  link: string;
  name: string;
  phone: string;
  title: string;
};

export type Contact = {
  agent: ContactAgent;
  email: string;
  emailManager: string;
  facebook: string;
  instagram: string;
  spotify: string;
};

export type Video = {
  date: string;
  id: string;
  title: string;
  type: 'dailymotion' | 'youtube';
};

export type Media = {
  videos: Video[];
};

export type Photo = {
  copyright: string;
  filename: string;
};

export type PhotoWithImage = Photo & {
  srcThumb: string;
  srcHighres: string;
  srcFullres: string;
};

export type Article = {
  author: string;
  content: Translation<string[]>;
  date: string;
  source: string;
};

export type WithClassName = {
  className?: string;
};

export type IconType = Omit<HTMLProps<SVGElement>, 'ref'>;
