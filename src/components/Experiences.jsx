import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiences = () => {
  return (
    <div className="fixed w-full h-full px-4   ">
     <motion.h2
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 200 }}
      transition={{ duration: 1 }}
      className="my-20 text-center  text-4xl"
    >
      Experiences
    </motion.h2>
      <div className="">
        {EXPERIENCES.map((exprience, index) => (
          <div key={index} className="mb-8 py-2 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-lg text-neutral-500">{exprience.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                <span className="text-rose-500 text-xl"> {exprience.role} - </span>{" "}
                <span className="text-s text-rose-400 ">
                  {exprience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400 leading-snug text-justify">{exprience.description}</p>
              {exprience.technologies.map((tech, index) => (
                <span
                  className="mr-2 mb-2 my-2 rounded bg-gray-700 px-4 py-0.5  text-sm font-medium text-rose-400"
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

export default Experiences;
