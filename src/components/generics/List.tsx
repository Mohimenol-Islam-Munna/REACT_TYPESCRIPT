import React from "react";
type ListProps<T> = {
  items: T[];
  itemHandler: (value: T) => void;
};

const List = <T extends {}>({ items, itemHandler }: ListProps<T>) => {
  return (
    <div>
      {items.map((item, index) => {
        return (
          <div key={index}>
            <h2 onClick={() => itemHandler(item)}>
              Item Name : {JSON.stringify(item)}{" "} 
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default List;
