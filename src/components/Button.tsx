import React from "react";
type ButtonProps = {
  changeNumber: (
    event: React.MouseEvent<HTMLButtonElement>,
    value: number
  ) => void;
};

function Button(props: ButtonProps) {
  return (
    <div>
      <button
        className="bg-sky-600 px-5 py-2 border rounded-full"
        onClick={(event) => {
          props.changeNumber(event, 45);
        }}
      >
        Click Me
      </button>
    </div>
  );
}

export default Button;
