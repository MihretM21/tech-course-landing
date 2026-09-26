import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CourseGrid from "./components/CourseGrid";
import Benefits from "./components/Benefits";
import Testimonial from "./components/Testimonial";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <CourseGrid />
      <Benefits />
      <Testimonial />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
