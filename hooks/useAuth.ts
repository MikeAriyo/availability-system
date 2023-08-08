import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "../app/context/AuthContext";
import { getCookie } from "cookies-next";

const useAuth = () => {
  const { data, error, loading, setAuthState } = useContext(
    AuthenticationContext
  );
  const signin = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signin",
        {
          email,
          password,
        }
      );
      console.log(response);
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });

      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
      console.log(error);
    }
  };
  const signup = async (
    {
      email,
      password,
      firstName,
      lastName,
      city,
      phone,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      city: string;
      phone: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({
      data: null,
      error: null,
      loading: true,
    });
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        {
          email,
          password,
          firstName,
          lastName,
          city,
          phone,
        }
      );
      setAuthState({
        data: response.data,
        error: null,
        loading: false,
      });

      handleClose();
    } catch (error: any) {
      setAuthState({
        data: null,
        error: error.response.data.errorMessage,
        loading: false,
      });
      console.log(error);
    }
  };

  const fetchUser = async () => {
    setAuthState({
        data: null,
        error: null,
        loading: true,
      });
    try{
        const jwt = getCookie("jwt")

        if (!jwt) {
            return setAuthState({
                data: null,
                error: null,
                loading: false,
              });
        }

        const response = await axios.get("http://localhost:3000/api/auth/me", {
            headers : {
                Authorization: `Bearer ${jwt}`
            }
        })
    }
  }

  return {
    signin,
    signup,
  };
};

export default useAuth;
