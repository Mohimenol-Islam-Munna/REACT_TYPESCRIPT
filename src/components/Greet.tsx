import React from "react";
type GreetProps = {
  name: string;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Hi {props.name}! welcome to react typescript world</h2>
    </div>
  );
}

export default Greet;
