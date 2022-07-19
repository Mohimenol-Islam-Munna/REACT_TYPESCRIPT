import React from "react";
type PersonListProps = {
  names: {
    firstName: string;
    lastName: string;
  }[];
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      <h2>Person List</h2>
      {props.names.map((name) => (
        <div>
          <h3>
            {name.firstName} {name.lastName}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
