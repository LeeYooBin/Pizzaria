import { redirect } from "next/navigation";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useReducer
} from "react";

import { authReducer, AuthState, initialState } from "../reducers/authReducer";

import api from "data/utils/api";
import Cookies from "universal-cookie";

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoggedIn: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const cookies = new Cookies();

const getInitialStateFromCookies = (): AuthState => {
  const userDataCookie = cookies.get("userData");
  return userDataCookie ? userDataCookie : initialState;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children
}) => {
  const [state, dispatch] = useReducer(
    authReducer,
    getInitialStateFromCookies()
  );
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
    const storedLoggedIn = cookies.get("isLoggedIn");
    return storedLoggedIn ? storedLoggedIn : false;
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post("/user/auth", { email, password });
      dispatch({ type: "LOGIN", payload: response.data });
      setIsLoggedIn(true);
      cookies.set("isLoggedIn", "true");
      cookies.set("userData", response.data);
      const tokenExpireTime = extractTokenExpireTime(response.data.token);
      if (tokenExpireTime) {
        setTimeout(() => logout(), tokenExpireTime - Date.now());
      }
      redirect("/");
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setIsLoggedIn(false);
    cookies.remove("isLoggedIn");
    cookies.remove("userData");
    localStorage.removeItem("cart");
    redirect("/");
  };

  useEffect(() => {
    const token = state.token;
    if (token) {
      const tokenExpireTime = extractTokenExpireTime(token);
      if (tokenExpireTime) {
        const timeout = setTimeout(
          () => logout(),
          tokenExpireTime - Date.now()
        );
        return () => clearTimeout(timeout);
      }
    }
  }, [state.token]);

  useEffect(() => {
    cookies.set("userData", state);
  }, [state]);

  const extractTokenExpireTime = (token: string): number | null => {
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      if (decodedToken && decodedToken.exp) {
        return decodedToken.exp * 1000;
      }
    } catch (error) {
      console.error("Error decoding token:", error);
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        isLoggedIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
