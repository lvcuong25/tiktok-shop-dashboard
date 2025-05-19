import React, { createContext, useEffect, useState } from "react";
import { getUserByToken } from "./_request"; // adjust the path according to your project structure
import { getAuth, removeAuth } from "./AuthHelper";


const AuthContext = createContext();
export const fetchUser = async (setCurrentUser) => {
  const token = getAuth();
  if (!token) {
    removeAuth();
    setCurrentUser(null);
    return;
  }
  try {
    const { data } = await getUserByToken();
    if (data) {
      setCurrentUser(data);
    } else {
      removeAuth();
      setCurrentUser(null);
    }
  } catch {
    removeAuth();
    setCurrentUser(null);
  }
};

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  
  useEffect(() => {
    fetchUser(setCurrentUser);
  }, []);

  const removeCurrentUser = () => {
    removeAuth();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ currentUser, setCurrentUser, removeCurrentUser, isLogin: !!currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };