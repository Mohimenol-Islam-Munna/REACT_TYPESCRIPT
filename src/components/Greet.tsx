import React from "react";
type GreetProps = {
  name: string;
  count: number;
  isAdmin: boolean;
};

function Greet(props: GreetProps) {
  return (
    <div>
      {props.isAdmin ? (
        <h2>
          Hi {props.name}! welcome to react {props.count} typescript world
        </h2>
      ) : (
        <h2>Hi Guest</h2>
      )}
    </div>
  );
}

export default Greet;
