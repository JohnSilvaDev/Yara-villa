import { BrowserRouter, Routes, Route, useParams, Navigate } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";

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

function LangWrapper() {
  const { lang } = useParams();

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }

    // 🌍 Update HTML lang
    document.documentElement.lang = lang || "pt";

    // 🧠 Dynamic titles
    const titles = {
      pt: "Yara Villa | Luxo e conforto no Brasil",
      en: "Yara Villa | Luxury stay in Brazil",
      fr: "Yara Villa | Séjour de luxe au Brésil",
      de: "Yara Villa | Luxusaufenthalt in Brasilien",
      es: "Yara Villa | Estancia de lujo en Brasil",
    };

    document.title = titles[lang] || titles["pt"];

    // 🧠 Dynamic descriptions
    const descriptions = {
      pt: "Hospede-se na Yara Villa com conforto, natureza e exclusividade.",
      en: "Stay at Yara Villa with comfort, nature and exclusivity.",
      fr: "Séjournez à Yara Villa avec confort et exclusivité.",
      de: "Erleben Sie Komfort und Exklusivität in der Yara Villa.",
      es: "Disfruta de comodidad y exclusividad en Yara Villa.",
    };

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        descriptions[lang] || descriptions["pt"]
      );
    }

  }, [lang]);

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root */}
        <Route path="/" element={<Navigate to="/pt" />} />

        {/* Language routes */}
        <Route path="/:lang" element={<LangWrapper />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;