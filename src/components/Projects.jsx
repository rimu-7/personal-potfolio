import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    fetch("https://personal-backend-nine.vercel.app/api/projects") // Update the URL if deployed
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setProjects(data);
        setError(null); // Clear error state if successful
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
        setError("Failed to load projects. Please try again later.");
      })
      .finally(() => setLoading(false));
  }, []);
  
  if (loading) {
    return <div className="text-center text-2xl mt-10">Loading Projects...</div>;
  }
  
  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }
  
  // Render projects list here
  
  
  // Render projects list here
  

  //check if the project has feature or not
  const hasFeatures = projects.features && projects.features.length > 0;

  return (
    <div className="min-h-screen  border-neutral-800  px-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 2 }}
        className="my-16 text-center text-4xl font-bold"
      >
        Projects
      </motion.h2>
      <div className="max-w-5xl mx-auto ">
        {projects.map((project, index) => (
          <div
            className="mb-10 flex flex-col lg:flex-row items-center border-b border-neutral-800 p-2 sm:border-hidden lg:items-start gap-6"
            key={index}
          >
            {/* Project Image */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 2 }}
              className="flex-shrink-0  max-w-[300px] lg:w-1/3"
            >
              <img
                src={project.image}
                alt={project.title}
                className=" h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 2 }}
              className=" lg:w-2/3"
            >
              <h6 className="mb-3 font-semibold text-xl">
                <a
                  href={project.githubrepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  {project.title}
                </a>
                {"  |  "}
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:underline"
                >
                  Live Demo 🚀
                </a>
              </h6>

              <p className="mb-4 text-neutral-500 text-justify">
                {project.description}
              </p>

              <div>
                {hasFeatures && (
                  <p className="mb-4 text-neutral-700 text-justify">
                    <strong>Features:</strong> {project.features.join(", ")}
                  </p>
                )}
                
              </div>


              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-gray-700 text-rose-400 text-sm font-medium px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
