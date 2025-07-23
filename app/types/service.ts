import { StaticImageData } from "next/image";

export interface ServiceItemProps {
  title: string;
  description: string;
  image?: StaticImageData | string;
  isOpen: boolean;
  onClick: () => void;
};