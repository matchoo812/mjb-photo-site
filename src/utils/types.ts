import { Dispatch, SetStateAction } from "react";
import { IconType } from "react-icons";

export type NavLink = {
  href: string;
  label: string;
};

export type SocialLink = {
  href: string;
  siteName: string;
  icon: IconType;
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
  title: string;
  tags?: string;
};

export type GalleryContextType = {
  imageList: PhotoWithInfo[];
  activeIndex: number;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  closeImageSlider: () => void;
};
