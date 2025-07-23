import { StaticImageData } from "next/image";

export type ProjectType = {
  id: string;
  company: string;
  industry: string;
  img: StaticImageData;
  services: {
    development: boolean;
    design: boolean;
    maintenance: boolean;
    seo: boolean;
  }
};

// Props type for components that receive a project
export interface ProjectProps {
  project: ProjectType;
}