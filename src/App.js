import Footer from "./components/footer/footer";
import HeroSection from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Skills from "./components/skills/skills";
import Works from "./components/works/works";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Skills />
      <Works />
      <Footer />
    </div>
  );
}

export default App;
