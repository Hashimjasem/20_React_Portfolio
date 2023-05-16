import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Skills from "./components/skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
