import CategorySorter from "./CategorySorter";
import CarContainer from "./CarContainer";
import carImage from "../images/carImages/Chevrolet_Malibu.avif";
import "../style/OurCars.css"

export default function OurCars() {
  return (
    <section className="our-cars">
      <CategorySorter />
      <section className="car-section">
        <div className="cars-container">
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>    
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>    
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
          <CarContainer imageSrc={carImage} brand="Chevrolet" model="Malibu" year="2022" price="125.000 Kr" transmissionType="Automatisk" fuelType="Diesel" milage="10.000 mil"/>
        </div>
      </section>
    </section>
  );
};