import axios from "axios";
import {
  LoginRequestBody,
  LoginResponse,
  RegisterRequestBody,
  RegisterResponse,
} from "../Types/auth";

export const register = async (
  firstname: string,
  lastname: string,
  email: string,
  password: string
): Promise<RegisterResponse> => {
  const requestBody: RegisterRequestBody = {
    firstname,
    lastname,
    email,
    password,
  };

  try {
    const response = await axios.post<RegisterResponse>(
      `http://127.0.0.1:8000/api/register`,
      requestBody
    );
    return response.data;
  } catch (error: any) {
    return error.response.data.message || "echec de l'inscription";
  }
};

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const requestBody: LoginRequestBody = { email, password };

  try {
    const response = await axios.post<LoginResponse>(
      `http://127.0.0.1:8000/api/login_check`,
      requestBody
    );
    return response.data;
  } catch (error: any) {
    return error.response?.data?.message || "Échec de la connexion";
  }
};
