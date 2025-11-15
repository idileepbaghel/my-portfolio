import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Projects from "../src/components/Project";
import Skills from "../src/components/Skills";
import ContactForm from "../src/components/Gmail";
import Contact from "../src/components/Contact";
// import Navbar from "./components/Navbar"; 

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <ContactForm />
      <Contact />
    </div>
  );
}

export default App;
