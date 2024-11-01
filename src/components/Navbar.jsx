import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="flex-shrink-0 items-center"
      >
        <img className="mx-2 w-16 h-auto" src={logo} alt="logo" />
      </motion.div>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 100 }}
        transition={{ duration: 1 }}
        className=" m-8 flex items-center justify-center gap-4 text-2xl"
      >
        <a href="https://www.linkedin.com/in/mutasim-fuad-rimu-36a4a8260/">
          <FaLinkedin />
        </a>
        <a href="https://x.com/__rimu7_">
          <FaTwitter />
        </a>
        <a
          href="https://github.com/rimu-7"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
      </motion.div>
    </nav>
  );
};
export default Navbar;
