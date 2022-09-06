import axios from "axios";
import { Login, LoginResponse, QuoteResponse, Register, User } from "../interfaces/QuoteInterfaces";

const axiosInstance = axios.create({ baseURL: "http://localhost:5000/" });

// API calls related to User

export const signUp = async (user: Register): Promise<string> => {
  const response = await axiosInstance.post("/signup", user);
  return response.data;
};

export const signIn = async (user: Login): Promise<LoginResponse> => {
  const response = await axiosInstance.post("/login", user);
  return response.data;
};

export const getSignedInUser = async (token: string): Promise<User> => {
  const response = await axiosInstance.get("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserById = async (id: string, token: string): Promise<User> => {
  const response = await axiosInstance.get(`/me/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const updateUser = async (
  user: Register,
  token: string
): Promise<void> => {
  const response = await axiosInstance.patch("/me/update-password", user, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteUser = async (token: string): Promise<void> => {
  const response = await axiosInstance.delete("/me", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUserVotes = async (
  id: string,
  token: string
): Promise<[QuoteResponse]> => {
  const response = await axiosInstance
    .get(`/user/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      if (res.data.length > 0) {
        return res.data;
      } else {
        return null;
      }
    })
    .catch((e) => {
      console.log(e);
      return e;
    });
  return response;
};
