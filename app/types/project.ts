import { StaticImageData } from "next/image";

// Type for a single project item
export type ProjectType = {
  id: number;
  brandName: string;
  industry: string;
  projectCoverImg?: StaticImageData;
  development?: boolean;
  design?: boolean;
  maintenance?: boolean;
  comingSoon?: boolean;
};

// Props type for components that receive a project
export interface ProjectProps {
  project: ProjectType;
}