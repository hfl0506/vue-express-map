import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const BASE_URL = import.meta.env.VITE_PUBLIC_API;

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 25000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((request: AxiosRequestConfig<any>) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    request.headers = request.headers ?? {};
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  function (error: AxiosError) {
    if (
      error.response?.status === 401 &&
      error.response.config &&
      error.response.config.headers &&
      "Authorization" in error.response.config.headers
    ) {
      localStorage.removeItem("accessToken");
    }
    console.log(error);
    return Promise.reject(error);
  }
);

export default instance;
