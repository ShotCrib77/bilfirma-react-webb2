import CategorySorter from "./CategorySorter";
import CarContainer from "./CarContainer";
import carImage from "../images/carImages/Chevrolet_Malibu.avif";
import "../style/OurCars.css";
import React, { useState, useEffect } from "react";
import { FaBars, FaEllipsisV } from "react-icons/fa";

export default function OurCars() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [isSorterOpen, setSorterOpen] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isLargeScreen ? (
        <section className="our-cars">
          <div className="category-sorter-container">
            <CategorySorter />
          </div>

          <section className="car-section">
            <h1 className="page-header">Våra bilar</h1>
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
      ):(
        <section className="our-cars">
          <h1 className="page-header">Våra bilar</h1>
          
          <div className="category-sorter-container">
          <button className="show-category-sorter" onClick={() => setSorterOpen(!isSorterOpen)}>
            {isSorterOpen ? 'Stäng' : 'Filtrera'} <FaEllipsisV />
          </button>
            {isSorterOpen ? (<CategorySorter />) : (null)}
          </div>
          {!isSorterOpen ? (
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
          ) : (null)}
        </section>
      )}
    </>
  );
};
