import React from "react";
type StyleContainerProps = {
  styles: React.CSSProperties;
};

function StyleContainer(props: StyleContainerProps) {
  return (
    <div>
      <h2 style={props.styles}>Style Container Heading</h2>
    </div>
  );
}

export default StyleContainer;
