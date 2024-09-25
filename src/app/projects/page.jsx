"use client";
import Image from "next/image";
import { CiShare1 } from "react-icons/ci";
import { motion } from "framer-motion";

const projectInfo = [
  {
    id: "1",
    title: "E-Commerce Platform",
    imageSrc: "/images/ecommerce.jpg",
    frontend: "React.js",
    styling: "Tailwind CSS",
    backend: "Node.js, Express",
    database: "MongoDB",
    demoLink: "https://example.com/demo1",
  },
  {
    id: "2",
    title: "Educational Portal",
    imageSrc: "/images/eduportal.jpg",
    frontend: "React.js",
    styling: "Bootstrap",
    backend: "Node.js, Express",
    database: "MongoDB",
    demoLink: "https://example.com/demo2",
  },
  {
    id: "3",
    title: "Fintech App",
    imageSrc: "/images/fintech.jpg",
    frontend: "Next.js",
    styling: "CSS Modules",
    backend: "Node.js, Express",
    database: "MongoDB",
    demoLink: "https://example.com/demo3",
  },
  {
    id: "4",
    title: "Social Media Platform",
    imageSrc: "/images/socialmedia.jpg",
    frontend: "React.js",
    styling: "Sass",
    backend: "Node.js, Express",
    database: "MongoDB",
    demoLink: "https://example.com/demo4",
  },
  {
    id: "5",
    title: "Project Management Tool",
    imageSrc: "/images/projectmanagement.jpg",
    frontend: "Vue.js",
    styling: "Vuetify",
    backend: "Node.js, Express",
    database: "MongoDB",
    demoLink: "https://example.com/demo5",
  },
];

export default function page() {
  return (
    <div className=" py-4">
      <div className="flex flex-col py-12 w-6/12 ml-24">
        <p className="text-lg font-bold mb-4">
          Versatile MERN Stack Developer: Delivering Excellence Across Fintech,
          Edu-tech, and Ecommerce
        </p>
        <p className="">
          Over the past four years, I have successfully delivered over 50
          projects across diverse domains, including fintech, edu-tech, and
          ecommerce. My expertise in the MERN stack ensures end-to-end
          development excellence, providing tailored solutions for varied
          industry needs.
        </p>
      </div>

      <p className="font-semibold mb-5 ml-24">Project Gallery</p>
      <section className="w-10/12 mx-auto flex gap-3 flex-row flex-wrap">
        {projectInfo.map((project) => (
          <div
            key={project.id}
            className="flex relative  flex-row justify-center items-center cardContainer py-3 px-2 bg-gray-50 dark:bg-cyan-800 rounded-lg max-w-[21rem] min-w-[19rem]"
          >
            <Image
              src={project.imageSrc}
              alt="image"
              className="rounded-md "
              width={350}
              height={350}
            />
            <motion.div
              id="detail"
              className="flex flex-col text-sm hidden absolute bg-gray-50 dark:bg-cyan-800 p-2 top-0 bottom-0 left-0 right-0 rounded-lg"
              style={{ background: "rgba(0, 0, 0, 0.1)" }}
              whileHover={{ background: "rgba(0, 0, 0, 0.6)" }}
              transition={{
                duration: 0.3,
              }}
            >
              <p className="text-center text-2xl text-yellow-400 my-3 font-bold">
                {project.title}
              </p>
              <p className="flex flex-row w-11/12 mx-auto gap-3 text-white">
                <span>Front-end : </span>
                <span className="font-semibold text-yellow-300">
                  {project.frontend}
                </span>
              </p>
              <p className="flex flex-row w-11/12 mx-auto gap-3 text-white">
                <span>Styling : </span>
                <span className="font-semibold text-yellow-300">
                  {project.styling}
                </span>
              </p>
              <p className="flex flex-row w-11/12 mx-auto gap-3 text-white">
                <span>Back-end : </span>
                <span className="font-semibold text-yellow-300">
                  {project.backend}
                </span>
              </p>
              <p className="flex flex-row w-11/12 mx-auto gap-3 text-white">
                <span>Database : </span>
                <span className="font-semibold text-yellow-300">
                  {project.database}
                </span>
              </p>
              <a
                href={project.demoLink}
                className="flex mb-3 flex-row w-32 py-2 mt-auto cursor-pointer px-3 mx-auto bg-yellow-400 rounded-md justify-around items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-bold text-black">Demo</span>
                <CiShare1 size={20} color="black" />
              </a>
            </motion.div>
          </div>
        ))}
      </section>
    </div>
  );
}
