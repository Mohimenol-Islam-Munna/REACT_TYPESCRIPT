import React, { useState, createContext } from "react";
import Child from "./Child";

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

function Parent() {
  const [user, setUser] = useState<AuthUser | null>(null);

  return (
    <div>
      <h1>Parent Component Heading</h1>

      <UserContext.Provider value={{ user, setUser }}>
        <Child />
      </UserContext.Provider>
    </div>
  );
}

export default Parent;
