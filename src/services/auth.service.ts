/**
 * useLogin hook handles user login request and authentication.
 * It uses useMutation React hook to make login API request.
 * On success it stores auth token and user info.
 * On error it logs the error.
 */
import { useContext } from "react";
import { UseQueryResult, useMutation, useQuery } from "react-query";
import { AuthContext } from "../contexts/auth/auth-contexts";
import { LoginUserModel } from "../models/login-user.model";
import { IResponse } from "../models/response";
import { axiosInstance } from "./api";

export const useLogin = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useLogin must be used within an AuthProvider");
  }

  const { login } = authContext;

  const loginFn = async (loginData: LoginUserModel) => {
    const response = (await axiosInstance.post("/auth/login", loginData)).data;
    login(response.data.access_token);
    return response;
  };

  return useMutation(loginFn);
};

export const useRefreshToken = async () => {
  return (await axiosInstance.get("/auth/refresh")).data;
};

export const useUserProfile = (): UseQueryResult<IResponse<LoginUserModel>> => {
  const queryKey = ["auth", "user-profile"];

  const { refetch, ...queryResult } = useQuery<IResponse<LoginUserModel>>(
    queryKey,
    async () => {
      const response = await axiosInstance.get(`/auth/user-profile`);
      return response.data;
    }
  );

  return { ...queryResult, refetch };
};
