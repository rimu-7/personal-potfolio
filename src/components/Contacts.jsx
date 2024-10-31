import { useState } from "react";
import { CONTACT } from "../constants";
import emailjs from "emailjs-com";
import "../index.css";
import { motion } from "framer-motion";

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
      })
      .catch((err) => {
        console.error("Failed to send email. Error: ", err);
        alert("Failed to send email. Please try again later.");
      });
  };

  return (
    <div className="border-b border-neutral-800 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Get In Touch
      </motion.h2>
      <div className="text-center text-neutral-400">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>

        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div 
        whileInView={{opacity:1, x:0}}
        initial={{opacity:0, x: -100}}
        transition={{duration: 1}}>
        <a
        
          href={`mailto:${CONTACT.email}`}
          className="border-b border-neutral-800"
          target="_self"
        >
          {CONTACT.email}
        </a>
        </motion.div>

        <div className="flex justify-center">
          <form className="flex flex-col gap-4 w-80 p-4 rounded-lg">
            <motion.input
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: 200}}
            transition={{duration: 1}}
              type="email"
              id="emailInput"
              placeholder="Your email"
              className="outline-none border border-neutral-700 bg-green-100 rounded-lg p-2 h-10 w-full text-neutral-900"
              required
            />
            <motion.textarea
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: -200}}
            transition={{duration: 1}}
              id="messageInput"
              placeholder="Your message"
              className="outline-none border border-neutral-700 bg-green-100 rounded-lg p-2 h-40 w-full resize-none text-neutral-900"
              required
            />
            <motion.button
            whileInView={{opacity:1, x:0}}
            initial={{opacity:0, x: 100}}
            transition={{duration: 1}}
              className="self-end bg-royalblue rounded-lg p-2 font-medium cursor-pointer border border-neutral-700 bg-green-200 text-neutral-700"
              onClick={handleSendMessage}
            >
              Submit
            </motion.button>
          </form>
        </div>
        {isSubmitted && (
          <div className="mt-4 text-green-600">Message sent successfully!</div>
        )}
      </div>
    </div>
  );
};

// Ensure export is at the top level
export default Contacts;
