import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IProject {
  id: string;
  sourceCode: string;
  url: string;
  image: string;
  title: string;
  stack: string[];
}

const data: IProject[] = [
  {
    id: "1",
    sourceCode: "https://github.com/Masterpitan/deriv_api",
    url: "",
    image: "/imgs/sightings-page.jpg",
    title: "Deriv API",
    stack: ["CrewAI", "||", "Langchain", "||", "Gemini 1.5 Flash", "||", "FastAPI"],
  },
  {
    id: "2",
    sourceCode: "https://github.com/Masterpitan/Lumina-AI",
    url: "",
    image: "/imgs/sightings-page.jpg",
    title: "Lumina AI",
    stack: ["AWS Lambda", "||", "Docker", "||", "DynamoDB", "||", "Amazon Transcribe"],
  },
  {
    id: "3",
    sourceCode: "https://github.com/Masterpitan/alx-project-nexus",
    url: "",
    image: "/imgs/Screenshot (1).png",
    title: "ALX Project Nexus",
    stack: ["Python", "||", "Django", "||", "MySQL", "||", "GraphQL"],
  },
  {
    id: "4",
    sourceCode: "https://github.com/Masterpitan/web-status-checker",
    url: "",
    image: "/imgs/web-status-architecture.png",
    title: "Web Status Checker",
    stack: ["AWS Lambda", "||", "API Gateway", "||", "Terraform", "||", "Python"],
  },
  {
    id: "5",
    sourceCode: "https://github.com/Masterpitan/ci-cd_repo",
    url: "",
    image: "/imgs/devops-project-showcase.PNG",
    title: "AWS-Flask",
    stack: ["AWS", "||", "Flask", "||", "Terraform"],
  },
  {
    id: "6",
    sourceCode:
      "https://github.com/Masterpitan/projects_hub/tree/main/cafe_launch",
    url: "",
    image: "/imgs/DYNAMIC TWO.PNG",
    title: "Cafe Launch",
    stack: ["CloudFormation", "||", "CloudFront", "||", "CodePipeline", "||", "S3"],
  },
  {
    id: "7",
    sourceCode:
      "https://github.com/Masterpitan/projects_hub/tree/main/hng_internship",
    url: "",
    image: "/imgs/sightings-page.jpg",
    title: "Web Server Config",
    stack: ["AWS", "NGINX", "Django"],
  },
  {
    id: "8",
    sourceCode:
      "https://github.com/Masterpitan/projects_hub/tree/main/solutions_architecting",
    url: "",
    image: "/imgs/sightings-page.jpg",
    title: "Bird App",
    stack: ["Cloud9", "||", "CloudFront", "||", "Cognito", "||", "Dynamo Db"],
  },
];

const INITIAL_COUNT = 4;

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? data : data.slice(0, INITIAL_COUNT);

  return (
    <section className="lg:mt-[140px] mt-[60px] pb-[140px]">
      <div className="lg:max-w-[1110px] max-w-[90%] mx-auto">
        <div className="flex  justify-between mb-20 items-start lg:items-center gap-6">
          <h2 className="text-[32px] md:text-[40px] lg:text-[48px] text-white font-bold leading-tight">
            Projects
          </h2>
          <div className="lg:mt-[68px] mt-2">
            <a
              href="#contact"
              className="uppercase text-[16px] md:text-[18px] hover:text-green-500 ease-in-out transition-all duration-500 text-white font-bold block"
            >
              Contact me
            </a>
            <div className="bg-green-500 h-[2px] max-w-[130px] mt-3" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-[68px]">
          <AnimatePresence>
            {visibleProjects?.map(project => (
              <motion.div
                key={project?.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
                className="max-w-[540px] w-full relative group mx-auto"
              >
                <div className="absolute top-0 left-0 w-full h-[400px] bg-[#202020d2] gap-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10 cursor-pointer">
                  <a
                    href={project?.sourceCode}
                    target="_blank"
                    className="w-fit flex flex-col gap-3 uppercase text-sm font-semibold"
                  >
                    <span>View Code</span>
                    <span className="bg-green-500 h-[2px] w-full"></span>
                  </a>
                </div>

                <img
                  src={project?.image}
                  alt="cover thumbnail"
                  className="h-[400px] w-full object-cover"
                />

                <div className="mt-5">
                  <h4 className="text-[20px] md:text-[24px] lg:text-[28px] font-bold mb-2 text-white">
                    {project?.title}
                  </h4>
                  <p className="uppercase text-[14px] md:text-[16px] font-semibold text-white">
                    {project.stack.join(" ")}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {data.length > INITIAL_COUNT && (
          <div className="flex justify-center mt-16">
            <button
              onClick={() => setShowAll(prev => !prev)}
              className="uppercase text-[16px] md:text-[18px] hover:text-green-500 ease-in-out transition-all duration-500 text-white font-bold flex flex-col items-center gap-3"
            >
              <span>{showAll ? "Show Less" : "Show More"}</span>
              <span className="bg-green-500 h-[2px] w-full"></span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
