import { useState } from "react";
import "./App.css";
import PersonInformation from "./component/PersonInformation";

import person from "./person.json";
function App() {
  const [personList, setPersonList] = useState(person);
  console.log(personList);
  return (
    <div>
      <PersonInformation AllPersonList={personList} />
    </div>
  );
}

export default App;
