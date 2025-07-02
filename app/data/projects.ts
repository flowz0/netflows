import { ProjectType } from "../types/project";

import DuctDaddyLogo from "@/public/projects/duct-daddy-logo.png";
import DDDCThumbnail from "@/public/projects/dddc-thumbnail.png";
import DDDCBanner from "@/public/projects/dddc-banner.png";
import DDChallengeImg from "@/public/projects/dd-challenge-img.jpg";
import DDWireframesImg from "@/public/projects/dd-wireframes.png";
import DDCreateBlogImg from "@/public/projects/dd-blog-post.png";
import DDProtectedRoutesImg from "@/public/projects/dd-protect-routes.png";
import DDBlogImg from "@/public/projects/dd-blog-ui.png";
import DDTestimonialImg from "@/public/projects/dd-testimonial.png";
import DDDashboardImg from "@/public/projects/dd-dashboard.png";
import DDLighthouseImg from "@/public/projects/dd-lighthouse.png";
import DDCloudinaryImg from "@/public/projects/dd-cloudinary.png";
import NetflowsThumbnail from "@/public/projects/netflows-thumbnail.png";

const ProjectData: ProjectType[] = [
  {
    id: 0,
    brandName: "Duct Daddy",
    industry: "HVAC Cleaning Platform",
    summary: "The owner of Duct Daddy reached out to us to design and develop a web application for their business. We created a modern blog content management system and integrated a booking system for customers.",
    brandLogo: DuctDaddyLogo,
    development: true,
    design: true,
    maintenance: true,
    link: "https://www.ductdaddykc.com/",
    projectThumbnail: DDDCThumbnail,
    projectBanner: DDDCBanner,
    challenge: "The Challenge",
    challengeDesc: "Show up in Google search results for HVAC cleaning related topics. Potential clients looking for a service or more information. Optimize SEO to show on top results for industry. Secure content management system integrated into the website for industry information and traffic.",
    challengeImg: DDChallengeImg,
    solution: "The Solution",
    solutionDesc: "We went through our process from discovery to deployment. Starting with deliverable planning and wireframing. We implemented a modern UI, performant, SEO optimized, and secure backend with authentication and authorization for approved users to manage blog posts. The final product is fast, scalable, and exceeded client expectations.",
    solutionImg: DDWireframesImg,
    solutionImg2: DDCreateBlogImg,
    solutionImg3: DDProtectedRoutesImg,
    solutionImg4: DDBlogImg,
    results: "Results",
    resultsDesc: "The new website loads 68% faster on mobile, reduced bounce rate by 32%, and boosted service inquiries by 21% in the first month. The client can now publish blog content confidently and ranks on Google for key HVAC keywords in their local area.",
    resultsImg: DDTestimonialImg,
    takeaways: "What I Learned",
    takeawaysDesc: "This project deepened our expertise in delivering full-stack business solutions with measurable impact. We sharpened our skills in secure auth systems, modern content management system, and SEO optimization. Improving communication and planning with our partners.",
    takeawaysImg: DDDashboardImg,
    takeawaysImg2: DDLighthouseImg,
    takeawaysImg3: DDCloudinaryImg
  },
  {
    id: 1,
    brandName: "Netflows",
    industry: "Web Development Agency",
    summary: "This is where you are probably reading this from. Netflows website was created to be the home of my new web development agency.",
    // brandLogo: DuctDaddyLogo,
    comingSoon: true,
    development: true,
    design: true,
    maintenance: true,
    // projectBanner: DDDCBanner,
    projectThumbnail: NetflowsThumbnail,
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