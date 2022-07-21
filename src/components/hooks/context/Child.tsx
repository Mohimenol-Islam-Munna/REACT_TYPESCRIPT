import React, { useContext } from "react";
import { UserContext } from "./Parent";

function Child() {
  const userContext = useContext(UserContext);

  console.log("Child data :", userContext?.user);

  const loginHandler = () => {
    console.log("login handler");
    userContext?.setUser({ name: "munna", email: "munna@gmail.com" });
  };

  const logoutHandler = () => {
    console.log("log out handler");
    userContext?.setUser(null);
  };

  return (
    <div>
      <div>
        <button
          className="border px-4 py-1 mr-2 rounded-full"
          onClick={loginHandler}
        >
          LOGIN
        </button>
        <button
          className="border px-4 py-1 mr-2 rounded-full"
          onClick={logoutHandler}
        >
          LOG OUT
        </button>
      </div>
      <h2>User Name : {userContext?.user?.name}</h2>
      <h3>User Email : {userContext?.user?.email}</h3>
    </div>
  );
}

export default Child;
