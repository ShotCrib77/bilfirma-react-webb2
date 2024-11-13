import CarContainer from '../components/CarContainer';
import carImage from "../images/carImages/Chevrolet_Malibu.avif"
import "../style/CarSection.css";

export default function CarSection() {
  return(
    <section className="cars-section">
      <section className="cars-preview-container">
        <h1>Våra bilar</h1>
        <section className="cars-preview">
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 Km"/>
        </section>
        <span className="go-to-page-button">Se alla våra bilar</span>
      </section>
    </section>
  );
};