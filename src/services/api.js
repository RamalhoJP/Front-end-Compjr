/* eslint-disable prettier/prettier */
import axios from "axios";
const baseURL = "http://localhost:3000";

const apiPublic = axios.create({
  baseURL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
  },
});

export { apiPublic };
