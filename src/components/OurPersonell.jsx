import PersonellContainer from "./PersonellContainer";
import employeeImage from "../images/employee.jpg";
import "../style/OurPersonell.css"

export default function OurPersonell() {
  return (
    <section className="our-personell">
      <h1 className="page-header">Vår Personal</h1>
      <section className="employee-list">
        <PersonellContainer employeeImage={employeeImage} name={"Wilmer Säfsten"} description={"Webb dev"}/>
        <PersonellContainer employeeImage={employeeImage} name={"Pelle 1"} description={"CEO"}/>
        <PersonellContainer employeeImage={employeeImage} name={"Pelle 2"} description={"Sales"}/>
        <PersonellContainer employeeImage={employeeImage} name={"Pelle 3"} description={"Sales"}/>
        <PersonellContainer employeeImage={employeeImage} name={"Pelle 4"} description={"Sales"}/>
      </section>
    </section>
  );
};