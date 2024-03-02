import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Skills from "./pages/Skills";

const App: React.FC = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Services />
      {/* <Projects /> */}
      {/* <FunFact /> */}
      {/* <Blogs /> */}
      {/* <Feedback /> */}
      <Contact />
    </div>
  );
};

export default App;
