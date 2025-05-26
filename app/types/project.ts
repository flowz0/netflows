import { StaticImageData } from "next/image";

// Type for a single project item
export type ProjectType = {
  id: number;
  brandName: string;
  industry: string;
  summary?: string;
  brandLogo?: StaticImageData;
  development?: boolean;
  design?: boolean;
  maintenance?: boolean;
  comingSoon?: boolean;
  projectThumbnail?: StaticImageData;
  projectBanner?: StaticImageData;
  challenge?: string;
  challengeDesc?: string;
  challengeImg?: StaticImageData;
  solution?: string;
  solutionDesc?: string;
  solutionImg?: StaticImageData;
  solutionImg2?: StaticImageData;
  solutionImg3?: StaticImageData;
  solutionImg4?: StaticImageData;
  results?: string;
  resultsDesc?: string;
  resultsImg?: StaticImageData;
  takeaways?: string;
  takeawaysDesc?: string;
  takeawaysImg?: StaticImageData;
  takeawaysImg2?: StaticImageData;
  takeawaysImg3?: StaticImageData;
};

// Props type for components that receive a project
export interface ProjectProps {
  project: ProjectType;
}