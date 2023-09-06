import axios from "axios";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.1/",
  withCredentials: true,
  headers: {
    "API-KEY": "c70b5ca5-1b53-4fd4-8a0a-5dad9fc6ede2",
  },
});
