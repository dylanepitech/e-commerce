import axios from 'axios';
import { ApiResponse, UserComplementBody } from '../Types/userCrud';

export const getUserComplements = async (token: string, userId: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/users/complements/${userId}`, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return error.response.data.message
    } else {
      return 'Une erreur est survenue';
    }
  }
};


export const createUserComplement = async (token: string, complementData: UserComplementBody): Promise<ApiResponse | string> => {
  try {
    const response = await axios.post<ApiResponse>(`/api/users/complements`, complementData, {
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


export const updateUserComplement = async (token: string, id: number, fields: Partial<UserComplementBody>): Promise<ApiResponse | string> => {
  try {
    const response = await axios.patch<ApiResponse>(`/api/users/complements/${id}`, fields, {
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


export const deleteUserComplement = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.delete<ApiResponse>(`/api/users/complements/${id}`, {
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
