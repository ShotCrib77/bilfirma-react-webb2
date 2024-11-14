import employeeImage from "../images/employee.png"
import carIcon from "../images/CarIcon.png"
import "../style/AboutSection.css"
import { Link } from "react-router-dom"

export default function AboutSection() {
  return (
    <section className="we-are-bilfirma">
      <section className="about-section">
        <h1>Vi är Bilfirma</h1>
        <div className="about-us">
          <div className="about-us-container">

            <div className="about-us-img">
              <img src={carIcon}/>
            </div>
            
            <div className="about-us-text">
              <h2>Om oss</h2>
              <p>
                Välkommen till Bilfirma – din pålitliga partner när du letar efter kvalitetsbilar till rätt pris. 
                Sedan vi öppnade våra dörrar har vi specialiserat oss på att erbjuda noggrant utvalda begagnade bilar som håller hög standard och passar alla typer av förare. 
                Med vår slogan "Bra bilar, ännu bättre priser" strävar vi efter att ge våra kunder en kombination av prestanda, tillförlitlighet och kostnadseffektivitet. 
                Vårt team av erfarna bilsäljare och tekniker hjälper dig att hitta bilen som bäst matchar dina behov och budget. 
                Välkommen till Bilfirma – vi gör bilköp enkelt och prisvärt! 
              </p> {/* Definitivt inte Chatgpt */}
            </div>

          </div>
        </div>
        <div className="our-personnel-info-container">
          <div className="about-us-img">
            <img src={employeeImage}/>
          </div>
          <div className="employee-text">
            <h2>Vår personal</h2>
            <p>
              Våra anställda är hjärtat i vårt bilföretag, som fokuserar på att erbjuda kvalitativa och pålitliga begagnade bilar till våra kunder.
              De har en gedigen kunskap om fordon och arbetar engagerat för att hitta rätt bil för varje kunds behov. 
              Med en kombination av teknisk expertis och genuin servicekänsla strävar de alltid efter att skapa en trygg och smidig köpupplevelse. 
              Vårt team håller sig uppdaterat om marknadstrender och ger gärna råd kring både bilens skick och dess framtida värde. Vi sätter kunden i centrum och bygger långsiktiga relationer 
              genom vår pålitliga och professionella service.
            </p> {/*Också definitivt inte chat-gpt*/}
          </div>
        </div>
        <Link className="go-to-page-button" to="/personal">Se hela vårt team</Link>
      </section>
    </section>
  );
};