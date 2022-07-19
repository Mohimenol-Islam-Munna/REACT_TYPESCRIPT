import React from "react";
import "./App.css";

// components
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";

function App() {
  const names = [
    {
      firstName: "Md Mohimenol",
      lastName: "Munna 1",
    },
    {
      firstName: "Md Mohimenol",
      lastName: "Munna 2",
    },
    {
      firstName: "Md Mohimenol",
      lastName: "Munna 3",
    },
    {
      firstName: "Md Mohimenol",
      lastName: "Munna 4",
    },
  ];

  return (
    <div className="App">
      <h2>React Typescript</h2>
      <Greet name="Mohimenol Munna" count={18} isAdmin={false} />
      <Person name={{ firstName: "Islam", lastName: "Munna" }} />
      <PersonList names={names} />
      <Status status="success" />
      <Heading>Heading Childreen Props</Heading>
    </div>
  );
}

export default App;
