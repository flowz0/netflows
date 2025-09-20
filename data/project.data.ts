import { ProjectType } from "../types/project.type";

import DuctDaddyLogo from "@/public/projects/duct-daddy-logo.png";
import DDDCThumbnail from "@/public/projects/dddc-thumbnail.jpg";
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
    summary: "The owner of Duct Daddy reached out to us to design and develop a web application for their business. We created a modern blog content management system and integrated a booking system to optimize workflow and increase leads.",
    brandLogo: DuctDaddyLogo,
    services: {
      development: true,
      design: true,
      maintenance: true,
      seo: true,
    },
    techStack: {
      nextjs: true,
      typescript: true,
      tailwind: true,
      express: true,
      node: true,
      mongodb: true
    },
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
    takeaways: "What We Learned",
    takeawaysDesc: "This project deepened our expertise in delivering full-stack business solutions with measurable impact. We sharpened our skills in secure auth systems, modern content management system, and SEO optimization. Improving communication and planning with our partners.",
    takeawaysImg: DDDashboardImg,
    takeawaysImg2: DDLighthouseImg,
    takeawaysImg3: DDCloudinaryImg
  },
  {
    id: 1,
    brandName: "Netflows",
    industry: "Digital Creative Agency",
    summary: "The owner of Duct Daddy reached out to us to design and develop a web application for their business. We created a modern blog content management system and integrated a booking system for customers.",
    brandLogo: DuctDaddyLogo,
    comingSoon: true,
    services: {
      development: true,
      design: true,
      maintenance: true,
    },
    techStack: {
      nextjs: true,
      typescript: true,
      tailwind: true,
      express: true,
      node: true,
      mongodb: true
    },
    link: "https://www.netflows.xyz/",
    projectThumbnail: NetflowsThumbnail,
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
    takeaways: "What We Learned",
    takeawaysDesc: "This project deepened our expertise in delivering full-stack business solutions with measurable impact. We sharpened our skills in secure auth systems, modern content management system, and SEO optimization. Improving communication and planning with our partners.",
    takeawaysImg: DDDashboardImg,
    takeawaysImg2: DDLighthouseImg,
    takeawaysImg3: DDCloudinaryImg
  },
];

export default ProjectData;