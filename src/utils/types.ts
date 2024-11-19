export type NavLink = {
  href: string;
  label: string;
};

export type FetchedImageProps = {
  id: string;
  secret: string;
  server: string;
  title: string;
};

export type BasicPhoto = {
  id: string;
  title: string;
  tags: string;
};

export type PhotoWithInfo = {
  width: number;
  height: number;
  src: string;
  id: string;
  title?: string;
  tags?: string;
};
