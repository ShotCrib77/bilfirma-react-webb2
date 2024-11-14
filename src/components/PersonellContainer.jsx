import "../style/PersonellContainer.css";

export default function PersonellContainer({ employeeImage, name, description }) {
  return (
    <section className="personell-container">
      <figure>
        <div className="employee-image-container">
          <img src={employeeImage} alt={`${name}s profil`} />
        </div>
        <figcaption>
          <h2>{name}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
    </section>
  );
};