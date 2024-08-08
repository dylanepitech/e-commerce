import axios from 'axios';
import { ApiResponse } from '../Types/userCrud';
import {  CreateOrderBody } from '../Types/order';


export const getAllOrders = async (token: string): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/order`, {
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


export const getOrder = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.get<ApiResponse>(`/api/order/${id}`, {
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


export const createOrder = async (token: string, orderData: CreateOrderBody): Promise<ApiResponse | string> => {
  try {
    const response = await axios.post<ApiResponse>(`/api/order`, orderData, {
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


export const deleteOrder = async (token: string, id: number): Promise<ApiResponse | string> => {
  try {
    const response = await axios.delete<ApiResponse>(`/api/order/${id}`, {
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
