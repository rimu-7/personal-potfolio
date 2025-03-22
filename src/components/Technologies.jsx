import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
// import { DiRedis } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
// import { SiPostgresql } from "react-icons/si";
import { FaRobot } from "react-icons/fa";
// import { AiOutlineRobot } from "react-icons/ai";
import { SiFlask } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
// import { SiArchlinux } from "react-icons/si";
import { DiJava } from "react-icons/di";
import { SiHtml5 } from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { GrFedora } from "react-icons/gr";
import { AiOutlineDotNet } from "react-icons/ai";

// import { SiNvidia } from "react-icons/si";

import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: 0 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Technologies = () => {
  return (
    <div className="py-10 ">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 200 }}
        transition={{ duration: 1 }}
        className="my-5 text-center text-4xl"
      >
        Technologies
      </motion.h2>
      <motion.div
  whileInView={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -200 }}
  transition={{ duration: 1 }}
  className="flex flex-wrap justify-center gap-4"
>
  {[
    { icon: <SiHtml5 className="text-2xl text-red-600" />, delay: 1.8 },
    { icon: <SiCss3 className="text-2xl text-blue-600" />, delay: 2.1 },
    { icon: <SiTailwindcss className="text-2xl text-cyan-400" />, delay: 2 },
    { icon: <FaNodeJs className="text-2xl text-green-500" />, delay: 2.5 },
    { icon: <RiReactjsLine className="text-2xl text-cyan-400" />, delay: 2.5 },
    { icon: <TbBrandNextjs className="text-2xl" />, delay: 2.9 },
    { icon: <SiMongodb className="text-2xl text-green-500" />, delay: 2 },
    { icon: <FaRobot className="text-2xl text-yellow-300" />, delay: 3 },
    { icon: <SiFlask className="text-2xl text-blue-500" />, delay: 2.9 },
    { icon: <SiTensorflow className="text-2xl text-orange-500" />, delay: 2 },
    { icon: <SiMysql className="text-2xl text-blue-700" />, delay: 2.4 },
    { icon: <SiPhp className="text-2xl text-purple-500" />, delay: 1.9 },
    { icon: <SiCplusplus className="text-2xl text-blue-500" />, delay: 3 },
    { icon: <AiOutlineDotNet className="text-2xl" />, delay: 2.5 },
    { icon: <GrFedora className="text-2xl text-blue-500" />, delay: 2 },
    { icon: <DiJava className="text-2xl text-red-500" />, delay: 2 }
  ].map(({ icon, delay }, index) => (
    <motion.div
      key={index}
      variants={iconVariants(delay)}
      initial="initial"
      animate="animate"
      className="rounded-xl border-2 border-green-400 p-2 flex justify-center"
    >
      {icon}
    </motion.div>
  ))}
</motion.div>

    </div>
  );
};

export default Technologies;
