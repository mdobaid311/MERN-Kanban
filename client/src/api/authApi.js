import axiosClient from "./axiosClient";

const authApi = {
  signp: (params) => axiosClient.post("auth/signup", params),
  login: (params) => axiosClient.post("auth/login", params),
  verifyToken: () => axiosClient.get("auth/verifyToken"),
};

export default authApi;