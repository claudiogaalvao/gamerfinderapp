// /src/api/api.ts

const BASE_URL = "http://192.168.0.113:8080/";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface ApiResponse<T> {
  data: T;
  status: number;
}

const api = async <T>(
  endpoint: string,
  method: HttpMethod = "GET",
  body?: any
): Promise<T | void> => {
  const headers = {
    "Content-Type": "application/json",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    console.log(`ENDPOINT: ${BASE_URL}${endpoint}`);
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    if (!response.ok) {
      console.error("REQUEST ERROR");
      throw new Error(`Request error: ${response.statusText}`);
    }
    if (response.status === 204) {
      return;
    }
    console.log("REQUEST SUCCEED");
    const data: T = await response.json();
    return data;
  } catch (error) {
    console.error("HOUVE UM ERRO");
    console.error(error);
    throw error;
  }
};

export default api;
