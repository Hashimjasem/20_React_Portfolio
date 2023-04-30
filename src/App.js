import Hero from "./components/Hero";
import NavBar from "./components/navBar";
import Analytics from "./components/analytics";
import Newsletter from "./components/newsletter";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
    </div>
  );
}

export default App;
