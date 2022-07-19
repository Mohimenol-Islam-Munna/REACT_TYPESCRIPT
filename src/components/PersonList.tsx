import React from "react";
import { PersonListProps } from "./PersonList.types";

function PersonList(props: PersonListProps) {
  return (
    <div className="border border-green-700 p-5 mt-1">
      <h2>Person List</h2>
      {props.names.map((name, index) => (
        <div key={index}>
          <h3>
            {name.firstName} {name.lastName}
          </h3>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
