import './App.css';
import Navbar from "./components/Navbar"
import WelcomeSection from './components/WelcomeSection';
import AboutSection from './components/AboutSection';
import CarContainer from './components/CarContainer';
import OurPersonnel from './components/OurPersonnel';
import carImage from "./images/carImages/Chevrolet_Malibu.avif"

function App() {
  return (
    <div className="App">
      <Navbar />
      <WelcomeSection />
      <AboutSection />
      <section className="cars-preview-section">
        <section className="cars-preview-container">
          <h1>Våra bilar</h1>
          <section className="cars-preview">
            <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
            <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
            <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
          </section>
          <span className="view-cars-button">Se alla våra bilar</span>
        </section>
      </section>
      <OurPersonnel />
    </div>
  );
}

export default App;
