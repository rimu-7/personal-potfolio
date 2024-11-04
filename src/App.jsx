import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";
import "./index.css";
import Expriences from "./components/Expriences";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-900 antialiased selection:bg-indigo-300 selection:text-neutral-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-green-100 ">
          <div className="absolute bottom-0 left-0 right-0 top-0 "></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero className="mt-4" />
        <About />
        <Technologies />
        <Expriences />
        <Projects />
        <Contacts />
      </div>
    </div>
  );
};

export default App;
