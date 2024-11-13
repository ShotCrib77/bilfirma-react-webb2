import "../style/CarContainer.css"

export default function CarContainer({ imageSrc, brand, model, year, price, transmissionType, fuelType, milage }) {
  const altText = `Picture of a ${year} ${brand} ${model}`;
  return (
    <section className="car-container">
      <section className="car-content">
        <section className="image-container">
          <img src={imageSrc} alt={altText} className="car-img" />
        </section>
        <hr className="full-line"/>
        <section className="car-container-info-section">
          {/*Brand / Model*/}
          <div>
            <span>
              Märke/Modell <br/>
              <b>{brand} {model}</b>
            </span>
            <span>
              År <br/>
              <b>{year}</b>
            </span>
          </div>
          <hr/>
          {/*Price*/}
          <div>
            <span>
              Pris: <b>{price}</b>
            </span>
          </div>
          <hr/>
          {/*Transmisson type and Fuel type*/}
          <div>
            <span>
              Transmission <br/>
              <b>{transmissionType}</b>
            </span> 
            <span>
              Drivmedel <br/>
              <b>{fuelType}</b>
            </span>
          </div>
          <hr/>
          {/*Milage (swedish "mil")*/}
          <div>
            <span>
              Mil tal: <b>{milage}</b>
            </span>
          </div>
        </section>
      </section>
    </section>
  );
};