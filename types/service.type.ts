import { StaticImageData } from "next/image";

export interface ServiceProps {
  title: string;
  description: string;
  image?: StaticImageData | string;
  isOpen: boolean;
  onClick: () => void;
};

export interface ServiceSectionProps {
  header: string;
  desc: string;
  img: StaticImageData;
  flip?: boolean;
  buttonLabel: string;
}