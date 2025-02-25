import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/rimu.png";
import { motion } from "framer-motion"
import Technologies from "./Technologies";
import useDelayedRender from "../Shared/Loader/useDelayedRender";

const container = (delay) => ({
  hidden: { x: -200, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay },
  }
})

const Hero = () => {
  return  (
   <div className=" px-4 sm:px-20 ">
     <div className=" lg:mb-35  border-b border-neutral-900">
      <div className="flex flex-wrap mb-10 ">
        <div className="w-full lg:w-1/2">
          <div className="flex  flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"

              className="pb-4 text-4xl font font-bold  lg:mt-3 lg:text-5xl">
              Rimu Mutasim Fuad
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-clip-text text-2xl">
              Staying Ahead of the Curve
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-8 max-w-3xl py-10 text-2xl text-neutral-700 leading-snug text-justify"
            >
              {HERO_CONTENT}
            </motion.p>



          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-16">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}

              src={profilePic}
              alt="Profile"
              className=" rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
    <Technologies/>
   </div>
  );
};

export default Hero;
