import React from "react";
import "./App.css";

// components
import Greet from "./components/Greet";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import Heading from "./components/Heading";
import Button from "./components/Button";
import Input from "./components/Input";
import StyleContainer from "./components/StyleContainer";

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
      <Greet name="Mohimenol Munna" count={18} isAdmin={true} />
      <Person name={{ firstName: "Islam", lastName: "Munna" }} />
      <PersonList names={names} />
      <Status status="success" />
      <Heading>Heading Childreen Props</Heading>
      {/* for optional props  */}
      <Greet name="Mohimenol Munna" isAdmin={true} />

      <Button
        changeNumber={(event, id) => {
          console.log("change number handler", event);
          console.log("params ", id);
        }}
      />

      <Input
        inputTextHandler={(event) => {
          console.log(event.target.value);
        }}
      />

      <StyleContainer
        styles={{
          width: "50%",
          margin: "auto",
          padding: "20px",
          backgroundColor: "gray",
          textAlign: "center",
          color: "white",
        }}
      />
    </div>
  );
}

export default App;
