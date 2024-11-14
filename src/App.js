import './App.css';
import Navbar from "./components/Navbar"
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import CarSection from './components/CarSection';
import Footer from './components/Footer';
import OurCars from './components/OurCarsPage';
import OurPersonell from './components/OurPersonell';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
       <Route
        path = "/"
        element = {
          <>
            <WelcomeSection />
            <AboutSection />
            <CarSection />
          </>
        }
        />
        <Route
          path = "/bilar"
          element = {
            <OurCars />
          }
        />
        <Route
          path = "/personal"
          element = {
            <OurPersonell />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;