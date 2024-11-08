/** @format */

import axios from "axios";
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const signUp = async ({ email, dateOfBirth, password }) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://pinterest-clone-96a4949a7a23.herokuapp.com/api/v1/auth/signup",
        {
          email,
          dateOfBirth,
          password,
        }
      );
      setData(response.data.token);
      console.log(response);
    } catch (err) {
      setError("Error");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const logIn = async ({ email, password }) => {
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://pinterest-clone-96a4949a7a23.herokuapp.com/api/v1/auth/login",
        {
          email,
          password,
        }
      );
      setData(response.data.token);
      console.log(response);
      setIsAuthenticated(true);
    } catch (err) {
      setError("Error");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        error,
        data,
        signUp,
        logIn,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
