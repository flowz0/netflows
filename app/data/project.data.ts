import DuctDaddyImg from "@/public/projects/dddc-thumbnail.png";
import NetflowsImg from "@/public/hero-img.png";
import { ProjectType } from "../types/project.type";

const ProjectData: ProjectType[] = [
  {
    id: "0",
    company: "Duct Daddy",
    industry: "HVAC Service Platform",
    img: DuctDaddyImg,
    services: {
      development: true,
      design: true,
      maintenance: false,
      seo: true,
    },
  },
  {
    id: "1",
    company: "Netflows",
    industry: "Creative Digital Agency",
    img: NetflowsImg,
    services: {
      development: true,
      design: true,
      maintenance: true,
      seo: false,
    },
  },
];

export default ProjectData;