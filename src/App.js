import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Skills from "./components/skills";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Skills/>
      <Newsletter/>
    </div>
  );
}

export default App;
