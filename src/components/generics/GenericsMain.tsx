import React from "react";
import List from "./List";

function GenericsMain() {
  //   const items = ["munna", "ifti", "siam", "nayeem"];
  const items = [1, 2, 3, 4, 5];

  const itemHandler = (name: string | number) => {
    console.log("Item Name ::", name);
  };

  return (
    <div className="w-[50%] mx-auto border p-2 mt-10">
      <h2 className="text-3xl mb-3">Generics Main</h2>
      <List items={items} itemHandler={itemHandler} />
    </div>
  );
}

export default GenericsMain;
