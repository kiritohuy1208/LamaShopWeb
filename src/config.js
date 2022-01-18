import axios from "axios";

const baseUrl = "http://localhost:8000";
const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTNjYmNmMzYzZjVkYmYyOWIzYWI3MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MjMxOTI5OSwiZXhwIjoxNjQyMzMwMDk5fQ.TrKhgqPlYeVY3kUKUwAT_mKSZ4ykQvcH3ZQuHq8-P0U"
export const api = `${baseUrl}/api`;

export const publishRequest = axios.create({
  baseURL: baseUrl,
});
export const userRequest = axios.create({
  baseURL: baseUrl,
  headers:{token:`Bearer ${Token}`}
});
