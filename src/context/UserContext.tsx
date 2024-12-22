"use client"
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the user object (adjust as per your application's needs)
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the shape of the context value
interface UserContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Create the context with a default value
export const UserContext = createContext<UserContextType | undefined>(undefined);

// Define the props for the UserProvider
interface UserProviderProps {
  children: ReactNode; // Represents any valid React children
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("Customer");
    if (storedUser) {
      setUser(JSON.parse(storedUser) as User); // Parse the stored JSON and cast it to `User`
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
