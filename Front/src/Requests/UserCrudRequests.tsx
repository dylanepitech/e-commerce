import axios from 'axios';
import { ApiResponse, UpdateUserFields } from '../Types/userCrud';
import { UserBody} from '../Types/User';

export const getMe = async (token: string): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>('/api/users/me', {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'Une erreur est survenue';
    } else {
      return 'Une erreur est survenue';
    }
  }
};

export const getUser = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'Une erreur est survenue';
    } else {
      return 'Une erreur est survenue';
    }
  }
};


export const getAllUser = async (token: string): Promise<ApiResponse | string> => {

  try {
    const response = await axios.get<ApiResponse>(`/api/users`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'Une erreur est survenue';
    } else {
      return 'Une erreur est survenue';
    }
  }
};


export const createUser = async (token: string, email: string, firstname: string, lastname: string, password: string): Promise<ApiResponse | string> => {
  const requestBody: UserBody = { email, firstname, lastname, password };
  try {
    const response = await axios.post<ApiResponse>(`/api/users`,requestBody, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message || 'Une erreur est survenue';
    } else {
      return 'Une erreur est survenue';
    }
  }
};

export const updateUser = async (token: string, id: number, fields: UpdateUserFields) => {
  try {
    const response = await axios.patch<ApiResponse>(`/api/users/${id}`, fields, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message;
    } 
  }
};

export const deleteUser = async (token: string, id:number): Promise<ApiResponse | string> => {
 
  try {
    const response = await axios.delete<ApiResponse>(`/api/users/${id}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message|| 'Une erreur est survenue';
    } else {
      return 'Une erreur est survenue';
    }
  }
};