import { useState } from "react";
import { CONTACT } from "../constants";
import emailjs from "emailjs-com";
import "../index.css";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify"; // Import ToastContainer and toast
import "react-toastify/dist/ReactToastify.css"; // Import the CSS for toast notifications

const Contacts = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSendMessage = (event) => {
    event.preventDefault();
    const userEmail = document.getElementById("emailInput").value;
    const message = document.getElementById("messageInput").value;
    const subject = "Mail from portfolio website";

    const templateParams = {
      email: userEmail,
      message: message,
      subject: subject,
    };

    console.log("Sending email with params:", templateParams); // Debugging

    emailjs
      .send(
        "service_hu9kui6",
        "template_in2apgi",
        templateParams,
        "OgXyKVoSxxFKXtQkh"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        setIsSubmitted(true);
        document.getElementById("emailInput").value = "";
        document.getElementById("messageInput").value = "";

        // Show success toast notification
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);

        // Show error toast notification
        toast.error("Failed to send email. Please try again later.", {
          position: "top-right",
          autoClose: 3000, // Close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <div className="pb-20">
      {/* Toast Container */}
      <ToastContainer />

      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 hover:text-green-300 duration-300 transition-colors cursor-pointer relative group"
          onClick={() => {
            navigator.clipboard.writeText(CONTACT.address)
              .then(() => {
                toast.success("Address copied to clipboard!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              })
              .catch((err) => {
                console.error("Failed to copy address: ", err);
                toast.error("Failed to copy address. Please try again.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
          }}
        >
          {CONTACT.address}
          <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Click to copy
          </span>
        </motion.p>

        {/* <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          onClick={() => {
            navigator.clipboard.writeText(CONTACT.email)
              .then(() => {
                toast.success("Email copied to clipboard!", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              })
              .catch((err) => {
                console.error("Failed to copy email: ", err);
                toast.error("Failed to copy email. Please try again.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              });
          }}
          className="border-b-2 border-green-300 hover:text-green-300 duration-300 transition-colors cursor-pointer"
          target="_self"
        >
          {CONTACT.phoneNo}
        </motion.p> */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="relative group m-4"
        >
          <a
            onClick={() => {
              navigator.clipboard.writeText(CONTACT.phoneNo)
                .then(() => {
                  toast.success("phoneNo copied to clipboard!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  console.error("Failed to copy phoneNo: ", err);
                  toast.error("Failed to copy phoneNo. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            className="border-b-2 border-green-300 hover:text-green-300 duration-300 transition-colors cursor-pointer"
            target="_self"
          >
            {CONTACT.phoneNo}
            <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to copy
            </span>
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="relative group m-4"
        >
          <a
            onClick={() => {
              navigator.clipboard.writeText(CONTACT.email)
                .then(() => {
                  toast.success("Email copied to clipboard!", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                })
                .catch((err) => {
                  console.error("Failed to copy email: ", err);
                  toast.error("Failed to copy email. Please try again.", {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                });
            }}
            className="border-b-2 border-green-300 hover:text-green-300 duration-300 transition-colors cursor-pointer"
            target="_self"
          >
            {CONTACT.email}
            <span className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-neutral-700 text-white text-sm px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Click to copy
            </span>
          </a>
        </motion.div>

        <div className="flex justify-center">
          <form className="flex flex-col gap-4 w-80 p-4 rounded-lg">
            <motion.input
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 200 }}
              transition={{ duration: 1 }}
              type="email"
              id="emailInput"
              placeholder="Your email"
              className="outline-none border-2 border-green-300 rounded-lg p-2 h-10 w-full bg-transparent"
              required
            />
            <motion.textarea
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -200 }}
              transition={{ duration: 1 }}
              id="messageInput"
              placeholder="Your message"
              className="outline-none border-2 border-green-300 rounded-lg p-2 h-40 w-full resize-none bg-transparent"
              required
            />
            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="self-end rounded-lg p-2 font-medium cursor-pointer bg-green-400 hover:bg-green-500 duration-300 transition-colors"
              onClick={handleSendMessage}
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;