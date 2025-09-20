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
  sectionId?: string;
  flip?: boolean;
  buttonLabel: string;
}