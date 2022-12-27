import { useState, useEffect } from "react";

import Header from "./components/UI/Header";
import SymptomList from "./components/Disorders/SymptomList";
import symptoms from "./data/SymptomsData";

const App = () => {
  const [disorders, setDisorders] = useState([]);

  useEffect(() => {
    const getDisorders = async () => {
      const disordersFromServer = await fetchDisorders();
      setDisorders(disordersFromServer);
      // console.log(disordersFromServer);
      // console.log(symptoms);
    };
    getDisorders();
  }, []);

  // Fetch Disorders
  const fetchDisorders = async () => {
    const res = await fetch("http://localhost:5000/disorders");
    const data = await res.json();

    return data;
  };

  // Add Task
  const addDisorder = async (disorder) => {
    console.log(`Disorder = ${JSON.stringify(disorder)}`);
    const res = await fetch("http://localhost:5000/disorders", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(disorder),
    });

    const data = await res.json();

    setDisorders([...disorders, data]);

    // const id = Math.floor(Math.random() * 10000) + 1
    // const newTask = { id, ...disorder }
    // setTasks([...tasks, newTask])
  };

  return (
    <div className="container">
      <Header />
      {symptoms.length > 0 ? (
        <>
          <SymptomList symptoms={symptoms} onAdd={addDisorder} />
        </>
      ) : (
        "No Disorders to show"
      )}
    </div>
  );
};

export default App;
