/** @format */

import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

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
      const token = response.data.data.token;
      setData(token);
      localStorage.setItem("authToken", token);
      console.log(response);
    } catch (err) {
      setError("Error");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const validateSession = async () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const response = await axios.get(
          "https://pinterest-clone-96a4949a7a23.herokuapp.com/api/v1/auth/me",
          {
            headers: {
              Authorization: `${token}`,
            },
          }
        );

        if (response.data.status === "success") {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem("authToken");
          setIsAuthenticated(false);
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      console.error("Invalid token");
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
      const token = response.data.data.token;
      setData(token);
      localStorage.setItem("authToken", token);
      console.log(response);
      setIsAuthenticated(true);
    } catch (err) {
      setError("Error");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    validateSession();
  }, []);

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
        isLogin,
        setIsLogin,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
