import axios from "axios";
import { BASE_URL } from ".";
import { useRefreshToken } from "./auth.service";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export function getTokenFromCookie(cookieString: string) {
  const parts = cookieString.split("=");
  if (parts.length >= 2) {
    return parts[1];
  }
  return null;
}

axiosInstance.interceptors.request.use(
  (config) => {
    const cookie = document.cookie;
    const token = getTokenFromCookie(cookie);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  async (error) => {
    console.log(error, "ppp");
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newToken = await useRefreshToken();
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newToken}`;
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);
