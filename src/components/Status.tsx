import React from "react";
type StatusProps = {
  status: "loading" | "error" | "success";
};

function Status(props: StatusProps) {
  let message;
  if (props.status === "loading") {
    message = "Loading ...";
  } else if (props.status === "error") {
    message = "Error";
  } else {
    message = "Success";
  }
  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default Status;
