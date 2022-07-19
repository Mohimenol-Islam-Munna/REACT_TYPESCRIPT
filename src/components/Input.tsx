import React from "react";
type InputProps = {
  inputTextHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input(props: InputProps) {
  return (
    <div className="p-10">
      <input
        className="border border-red-500 p-3 rounded-full"
        type="text"
        name="name"
        onChange={(event) => {
          props.inputTextHandler(event);
        }}
        placeholder="Enter Your Value"
      />
    </div>
  );
}

export default Input;
