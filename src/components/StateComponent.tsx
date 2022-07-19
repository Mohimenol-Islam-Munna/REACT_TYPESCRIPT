import React, { useState } from "react";

type User = {
  name: string;
  email: string;
};

function StateComponent() {
  const [user, setUser] = useState<User | null>(null);

  //   type assertion
  // const [user, setUser] = useState({} as User);

  const addUserHandler = () => {
    console.log("add user handler");
    setUser({ name: "Md Munna", email: "munna.cse.pust@gmail.com" });
  };

  return (
    <div className="my-5">
      <h2 className="my-3">React State With TypeScript</h2>
      <button
        onClick={addUserHandler}
        className="bg-[blueviolet] px-5 py-2 ring-4 rounded-full mb-3"
      >
        Get Api Data
      </button>
      {user && (
        <div>
          <h2>Name : {user?.name}</h2>
          <h3>Email : {user?.email}</h3>
        </div>
      )}
    </div>
  );
}

export default StateComponent;
