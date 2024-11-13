import DoubleSlider from "./DoubleSlider";
import CategoryList from "./CategoryList";
import "../style/CategorySorter.css"


export default function CategorySorter() {
  return(
    <section className="category-sorter-section">
      <h1><strong>Filter</strong></h1>
      <div>
        <h2><strong>Märken</strong></h2>
        <CategoryList itemArray = {[
          "Volvo", "BMW", "Skoda", "Audi", "Mercedes-Benz", "Volkswagen", "Ford", "Opel", 
          "Renault", "Peugeot", "Tesla", "Toyota", "Nissan", "Honda", "Kia"]}/>
      </div>
      <hr/>
      <div>
        <h2><strong>År</strong></h2>
        <DoubleSlider minLimit={1990} maxLimit={2024} />
      </div>
      <hr/>
      <div>
        <h2><strong>Pris</strong></h2>
        <DoubleSlider minLimit={0} maxLimit={500000} unit={"kr"}/>
      </div>
      <hr/>
      <div>
        <h2><strong>Transmission</strong></h2>
        <CategoryList itemArray = {["Manuell", "Automat", "Automat (manuellt läge)"]}/>
      </div>
      <hr/>
      <div>
        <h2><strong>Drivmedel</strong></h2>
        <CategoryList itemArray = {["Disel", "Bensin", "El", "Elhybrid", "Etanol"]}/>
      </div>
      <hr/>
      <div>
        <h2><strong>Miltal</strong></h2>
        <DoubleSlider minLimit={0} maxLimit={40000} unit={"mil"}/>
      </div>
      <hr/>
      <button className="search-cars">
          Sök
      </button>
    </section>
  );
};