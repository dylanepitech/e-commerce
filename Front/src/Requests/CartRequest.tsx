import axios from 'axios';
import { ApiResponse } from '../Types/userCrud';
import { CreateCartBody } from '../Types/cartCrud';


export const getAllCarts = async (token: string): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/carts`, {
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


export const getCart = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/carts/${id}`, {
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


export const getMyCart = async (token: string): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/carts/me`, {
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


export const createCart = async (token: string, cartData: CreateCartBody): Promise<ApiResponse | string> => {
  try {
    const response = await axios.post<ApiResponse>(`/api/carts`, cartData, {
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


export const updateCart = async (token: string, id: number, cartData: CreateCartBody): Promise<ApiResponse | string> => {
  try {
    const response = await axios.patch<ApiResponse>(`/api/carts/${id}`, cartData, {
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


export const deleteCart = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.delete<ApiResponse>(`/api/carts/${id}`, {
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
