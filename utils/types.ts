export type EventType = {
  _id: string,
  start: string,
  end: string,
  title: string,
  duration: number,
  isOnline: boolean,
  hybrid?: boolean,
}

export type ContentType = {
  type: string;
  text: string;
}
export type ProgramType = {
  _id: string;
  title: string;
  image?: string;
  content: ContentType[];
  resources: string[];
}

export enum PostTypeEnum {
  Blog = "Blog",
  News = "News",
  Anouncement = "Anouncement",
}
export type PostType = {
  _id: string;
  title: string;
  image: string;
  date: string;
  content: string;
  // content: ContentType[];
  resources: string[];
  tags: string[];
  type: PostTypeEnum;
}

export type BasicCardProps = {
  title: string;
  description: string;
  image: string;
}