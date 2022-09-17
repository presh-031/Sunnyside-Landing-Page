import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <Hero />
      <Grid />
      <Testimonials />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
