import React from "react";

// components
import Oscar from "./Oscar";

type HeadingProps = {
  children: string;
};

function Heading(props: HeadingProps) {
  return (
    <div>
      <h2>{props.children}</h2>
      <Oscar>
        <h2>Oscar Goes to Anata Jolil</h2>
      </Oscar>
    </div>
  );
}

export default Heading;
