import React, { useState } from "react";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userName: "",
  login: (token, firstName) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const savedName = localStorage.getItem("userName");
  const [userName, setUserName] = useState("");
  const userIsLoggedIn = !!token;

  const logInHandler = (token, firstName) => {
    setUserName(firstName);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("userName", firstName);
  };

  const logOutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
  };

  const contextValue = {
    token: token,
    userName: savedName,
    isLoggedIn: userIsLoggedIn,
    login: logInHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
