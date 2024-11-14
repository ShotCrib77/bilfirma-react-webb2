export default function PersonellContainer({ employeeImage, name, description }) {
  return (
    <section className="personell-container">
      <figure>
        <img src={employeeImage} alt={`${name}s profil`} />
        <figcaption>
          <h2>{name}</h2>
          <p>{description}</p>
        </figcaption>
      </figure>
    </section>
  );
};