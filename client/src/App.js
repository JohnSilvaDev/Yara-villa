import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Rooms from "./components/Rooms/Rooms";
import Amenities from "./components/Amenities/Amenities";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import BookingForm from "./components/BookingForm/BookingForm";
import Footer from "./components/Footer/Footer";
import FloatingButtons from "./components/FloatingButtons/FloatingButtons";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Amenities />
      <Gallery />
      <Testimonials />
      <BookingForm />
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;