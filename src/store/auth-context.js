import React, { useState } from "react";
import moment from "moment";

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  userName: "",
  isAdmin: false,
  login: (token, firstName, expiry, isAdmin) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    localStorage.removeItem("expiry");
    localStorage.removeItem("isAdmin");
  };

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);

  const savedName = localStorage.getItem("userName");
  const [userName, setUserName] = useState("");

  const isAdmin = localStorage.getItem("isAdmin");
  const [userIsAdmin, setUserIsAdmin] = useState(false);

  const expiry = localStorage.getItem("expiry");
  const currentTime = moment().valueOf();
  if (currentTime > expiry) removeToken();

  const userIsLoggedIn = !!token;

  const logOutHandler = () => {
    setToken(null);
    removeToken();
    setUserIsAdmin(false);
  };

  const logInHandler = (token, firstName, expiry, isAdmin) => {
    setUserName(firstName);
    setToken(token);
    setUserIsAdmin(isAdmin);
    localStorage.setItem("expiry", expiry);
    localStorage.setItem("token", token);
    localStorage.setItem("userName", firstName);
    localStorage.setItem("isAdmin", isAdmin);
    console.log(isAdmin);
  };

  const contextValue = {
    token: token,
    userName: savedName,
    isLoggedIn: userIsLoggedIn,
    isAdmin: userIsAdmin,
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
