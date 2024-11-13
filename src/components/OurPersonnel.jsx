import employeeImage from "../images/employee.png"
import "../style/OurPersonnel.css"

export default function OurPersonnel() {
  return (
    <section className="our-personnel-section">
      <h1>Vår personal</h1>
      <div className="our-personnel-info-container">
        <img src={employeeImage}></img>
        <p>
          Våra anställda är hjärtat i vårt bilföretag, som fokuserar på att erbjuda kvalitativa och pålitliga begagnade bilar till våra kunder.
          De har en gedigen kunskap om fordon och arbetar engagerat för att hitta rätt bil för varje kunds behov. 
          Med en kombination av teknisk expertis och genuin servicekänsla strävar de alltid efter att skapa en trygg och smidig köpupplevelse. 
          Vårt team håller sig uppdaterat om marknadstrender och ger gärna råd kring både bilens skick och dess framtida värde. Vi sätter kunden i centrum och bygger långsiktiga relationer 
          genom vår pålitliga och professionella service.
        </p> {/*Också definitivt inte chat-gpt*/}
      </div>

    </section>
  );
}