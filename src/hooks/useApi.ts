import axios from "axios";

const api = axios.create({
    baseURL: "localhost:3058"
});

export const useApi = () => ({
    validateToken: async (token: string) => {
        return {
          user: {
            id: 3,
            name: "Rafael Claudio",
            email: "rafaeltulaclaudio@gmail.com",
          },
          token: "123456789",
        };
        // const response = await api.post("/validate", { token });
        // return response.data;
      },
      signIn: async (email: string, password: string) => {
        //const response = await api.post("/signin", { email, password });
        return {
          user: {
            id: 3,
            name: "Rafael Claudio",
            email: "rafaeltulaclaudio@gmail.com",
          },
          token: "123456789",
        };
        // return response.data;
      },
      logout: async () => {
        return { status: true };
        //const response = await api.post("/logout");
        //return response.data;
      },
});