import React from "react";

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person(props: PersonProps) {
  return (
    <div>
      <h2>
        Person Info : {props.name.firstName} {props.name.lastName}
      </h2>
    </div>
  );
}

export default Person;
