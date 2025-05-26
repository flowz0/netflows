import { ProjectType } from "../types/project";

import DuctDaddyLogo from "@/public/projects/duct-daddy-logo.png";
import DDDCBanner from "@/public/projects/dddc-banner.png";

const ProjectData: ProjectType[] = [
  {
    id: 0,
    brandName: "Duct Daddy",
    industry: "HVAC Cleaning Company",
    summary: "The owner of Duct Daddy reached out to us to help them design and develop a website for their business. A professional design for a service based business with a booking system integrated.",
    brandLogo: DuctDaddyLogo,
    development: true,
    design: true,
    maintenance: true,
    projectBanner: DDDCBanner,
    challenge: "The Challenge",
    challengeDesc: "Show what problem needed solving and how complex it was. The problem the client was facing. Specific pain points. Technical or business challenges.",
    // challengeImg: img,
    solution: "The Solution",
    solutionDesc: "Include the service provided, tech stack, key features built, design approach, accessiblity, performance, or SEO optimizations made. Break into phases like: Discovery & Planning, Design & Wireframing, Development, and Testing & Deployment.",
    // solutionImg: img,
    results: "Results",
    resultsDesc: "Show the impact and outcome (quantitative or qualitative). Metric: Improved mobile load time by 68%, Increase conversions by 25%, Reduced bounce rate by 35%. Client testimonial, screenshots, graphs, analytics snapshopts.",
    // resultsImg: img,
    takeaways: "What I Learned (key takeaways)",
    takeawaysDesc: "Show your growth and how each project contributed to your expertise. New tech/tools you picked up. Challenges you overcame and skills sharpened (communication, testing, optimizations).",
    // takeawaysImg: img,
    // takeawaysImg2: img,
    // takeawaysImg3: img
  },
  {
    id: 1,
    brandName: "Netflows",
    industry: "Web Development Agency",
    summary: "This is where you are probably reading this from. Netflows website was created to be the home of my new web development agency.",
    // brandLogo: DuctDaddyLogo,
    development: true,
    design: true,
    maintenance: true,
    // projectBanner: DDDCBanner,
    challenge: "The Challenge",
    challengeDesc: "Show what problem needed solving and how complex it was. The problem the client was facing. Specific pain points. Technical or business challenges.",
    // challengeImg: img,
    solution: "The Solution",
    solutionDesc: "Include the service provided, tech stack, key features built, design approach, accessiblity, performance, or SEO optimizations made. Break into phases like: Discovery & Planning, Design & Wireframing, Development, and Testing & Deployment.",
    // solutionImg: img,
    results: "Results",
    resultsDesc: "Show the impact and outcome (quantitative or qualitative). Metric: Improved mobile load time by 68%, Increase conversions by 25%, Reduced bounce rate by 35%. Client testimonial, screenshots, graphs, analytics snapshopts.",
    // resultsImg: img,
    takeaways: "What I Learned (key takeaways)",
    takeawaysDesc: "Show your growth and how each project contributed to your expertise. New tech/tools you picked up. Challenges you overcame and skills sharpened (communication, testing, optimizations).",
    // takeawaysImg: img,
    // takeawaysImg2: img,
    // takeawaysImg3: img
  },
];

export default ProjectData;