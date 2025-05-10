import { StaticImageData } from "next/image";

export type ServiceType = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
};