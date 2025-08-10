import axios from "axios";

const api = axios.create({
  baseURL: "/api",   // ✅ 用 proxy, 不要硬寫 http://127.0.0.1:8000
  timeout: 15000,
});

export default api;