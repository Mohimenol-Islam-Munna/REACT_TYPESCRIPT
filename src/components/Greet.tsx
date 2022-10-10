import React from "react";

type GreetProps = {
  name: string;
  // optional props 
  count?: number;
  isAdmin: boolean;
};

function Greet(props: GreetProps) {
  // set default value when props is optional 
  const { count = 0 } = props;

  return (
    <div>
      {props.isAdmin ? (
        <h2>
          Hi {props.name}! welcome to react {count} typescript world
        </h2>
      ) : (
        <h2>Hi Guest</h2>
      )}
    </div>
  );
}

export default Greet;
