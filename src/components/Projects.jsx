import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl "
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                width={200}
                height={200}
                alt={project.title}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <a
                  href={project.githubrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="text-xl text-blue-600">{project.title}</span>
                </a>
              </h6>
              <p className="mb-4 text-neutral-400  leading-snug text-justify">
                {project.description}
              </p>
              <p className="mb-4 text-neutral-400  leading-snug text-justify">
                {project.features}
              </p>
              {project.technologies.map((tech, index) => (
                <span
                  className="rounded bg-gray-50 p-1 px-1 py-1 mr-2 mb-2 text-sm font-medium text-green-400 inline-block"
                  key={index}
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
