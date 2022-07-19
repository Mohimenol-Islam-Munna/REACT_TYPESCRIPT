import React from "react";

type PersonProps = {
  name: {
    firstName: string;
    lastName: string;
  };
};

function Person({ name }: PersonProps) {
  return (
    <div>
      <h2 className="text-red-500 text-3xl">
        Person Info : {name.firstName} {name.lastName}
      </h2>
    </div>
  );
}

export default Person;
