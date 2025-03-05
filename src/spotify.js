import axios from "axios";
const authEndpoint = "https://accounts.spotify.com/authorize;";
const clientID = "7c01e8c6b889469f8ea725dce16da227";
const redirectUrl = "http://localhost:5173/";
const SCOPES = ["playlist-read-private", "user-library-read"].join("%20");

const ClientSecret = "de204115908f4b6f9e05126d2dbe9f9a";

export const LOGIN_URL = `${authEndpoint}?client_id=${clientID}&response_type=token&redirect_uri=${encodeURIComponent(
  redirectUrl
)}&scope=${SCOPES}`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

// Function to set the Authorization token dynamically
export const setClientToken = (token) => {
  apiClient.interceptors.request.use(
    async (config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    },
    (error) => Promise.reject(error)
  );
};

export default apiClient;
