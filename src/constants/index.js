import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.jpg";
import project6 from "../assets/projects/project-6.jpg";
import project7 from "../assets/projects/project-7.jpg";
import project8 from "../assets/projects/project-8.png";
import project9 from "../assets/projects/project-9.png";

export const HERO_CONTENT = `As a Master's student at Changchun University of Science and Technology, I'm cultivating a rich foundation of technical expertise, built upon the solid groundwork laid during my undergraduate studies at Nanjing University of Information Science and Technology. With an insatiable curiosity and a drive for innovation, I'm dedicated to staying at the vanguard of the latest technological advancements and industry trends.
A lifelong learner at heart, I'm constantly seeking opportunities to refine my skills, contribute to open-source initiatives, and engage with the vibrant tech community, fostering a culture of collaboration and growth.`;

export const ABOUT_TEXT = `As a passionate technologist, I enjoy exploring new technologies, contributing to open-source projects, and staying active. I'm excited to expand my skill set to include Python, C++, Java and Linux, with a focus on machine learning and model training using TensorFlow and PyTorch. This will enable me to build more sophisticated and intelligent applications, and I'm eager to explore their potential in areas like image recognition, natural language processing, and predictive analytics.

I've worked with a range of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. I thrive in collaborative environments, solving complex problems to deliver high-quality solutions. With a passion for learning and adapting to new challenges, I'm committed to delivering exceptional results and driving innovation in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "2024 March - June",
    role: "SEO",
    company: "Internship at Jiangsu De-Tech Company Ltd. (March - June)",
    description: `During my internship at Jiangsu De-Tech Company Ltd. as an SEO specialist, I gained hands-on experience in optimizing website content and improving search engine rankings. I collaborated on various projects, enhancing my skills in keyword research, on-page SEO, and analytics. This experience deepened my understanding of digital marketing and improved my problem-solving abilities.`,
    technologies: ["HTML", "TAILWIND CSS", "PHP", "Sqlite", "JS", "PYTHON"],
  },
];

export const PROJECTS = [
  {
    title: "Online Quize Game",
    image: project1,
    description:
      "A fully functional online quize game, where user can generate different quiz.",
    technologies: ["HTML", "CSS", "JS"],
    githubrepo: "https://github.com/rimu-7/online-quiz-with-html-css-js",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
    githubrepo: "https://github.com/rimu-7/travellist",
  },
  {
    title: "Potato Disease Classification with Deep Learning",
    image: project3,
    description:
      "A web app that uses deep learning to classify potato plant images as healthy or diseased. Users upload photos, and the system provides quick predictions to assist farmers in disease identification.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
    githubrepo:
      "https://github.com/rimu-7/Potato-DIsease-Classification-with-Deep-Learning",
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
    githubrepo: "https://github.com/rimu-7/personal-blog-site",
  },

  {
    title: "HandWritten Recognition with deep Learning",
    image: project5,
    description:
      "Goal is to construct and train an artificial neural network on thousands of images of handwritten digits so that it may successfully identify others when presented. The data that will be incorporated is the MNIST database which contains 60,000 images for training and 10,000 test images. We will use the Keras Python API with TensorFlow as the backend..",
    technologies: ["HTML", "Tailwind", "React.js", "Framer-Motion", "mySQL"],
    githubrepo:
      "https://github.com/rimu-7/MNIST_IN_KERAS/blob/main/MNIST_in_Keras.ipynb",
  },
  {
    title: "Personal Resume Website",
    image: project6,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [
      "HTML",
      "Tailwind",
      "React.js",
      "JS",
      "Framer-Motion",
      "EmailJs",
    ],
    githubrepo: "https://github.com/rimu-7",
  },
  {
    title: "E-Commerce Platform",
    image: project7,
    description:
      "A fully functional e-commerce platform designed to provide an intuitive shopping experience, featuring product listings, user authentication, a shopping cart, and secure payment processing.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript(ES6+)",
      "React.js",
      "Node.js",
      "Express.js",
      "MySQL",
      "RESTful APIs",
      "JWT Authentication",
      "Stripe API for Payments",
    ],
    githubrepo: "https://github.com/rimu-7/helloecomerseshop",
    liveDemo: "https://helloshop-self.vercel.app/",
    features: [
      "User Registration and Login",
      "Product Search and Filtering",
      "Shopping Cart Functionality",
      "Order Management",
      "Responsive Design for Mobile and Desktop",
      "Admin Dashboard for Product Management",
    ],
    // challenges: [
    //   "Implementing secure payment processing",
    //   "Ensuring data integrity and security",
    //   "Optimizing performance for a seamless user experience",
    // ],
  },
  {
    title: "NativeBreed",
    image: project8,
    description: `The **NativeBreed** is a music band. It's a dynamic platform for showcasing the band's journey, featuring a carousel, about section, events page (with date-wise updates), blogs for sharing insights, artist profiles, and a contact form. It’s a central hub for fans to stay connected and informed about the band’s music, events, and updates. 🎸`,
    technologies: [
      "HTML",
      "Tailwind",
      "React.js",
      "JS",
      "MongoDB",
      "Express",
      "Framer-Motion",
      "EmailJs",
    ],
    githubrepo: "https://recordlabels.vercel.app/",
  },
  {
    title: "J Slught music website",
    image: project9,
    description: `The **J Slught Artist** is an artist. It's a dynamic platform showcasing the artist's journey, featuring a carousel, about section, events page (with date-wise updates), blogs for sharing insights, and a contact form. It’s a central hub for fans to stay connected and informed about J Slught’s music, events, and updates. 🎸`,
    technologies: [
      "HTML",
      "Tailwind",
      "React.js",
      "JS",
      "MongoDB",
      "Express",
      "Framer-Motion",
      "EmailJs",
    ],
    githubrepo: "https://artist-profile-one.vercel.app/",
  },
];

export const CONTACT = {
  address:
    "7000 Satellite Road, Chaoyang DIstrict, Changchun 130022, Jilin, China",
  phoneNo: "+86 19917247217",
  email: "fuadbhai@proton.me",
};
