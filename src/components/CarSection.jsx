import { Link } from 'react-router-dom';
import CarContainer from '../components/CarContainer';
import carImage from "../images/carImages/Chevrolet_Malibu.avif";
import "../style/CarSection.css";

export default function CarSection() {  
  return(
    <section className="cars-section">
      <section className="cars-preview-container">
        <h1>Våra bilar</h1>
        <section className="cars-preview">
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
        </section>
        <Link className="go-to-page-button" to="/bilar">Se alla våra bilar</Link>
      </section>
    </section>
  );
};