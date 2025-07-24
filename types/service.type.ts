import { StaticImageData } from "next/image";

export interface ServiceProps {
  title: string;
  description: string;
  image?: StaticImageData | string;
  isOpen: boolean;
  onClick: () => void;
};