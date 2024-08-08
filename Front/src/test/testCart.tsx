import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getAllCarts, getCart, getMyCart, createCart, updateCart, deleteCart } from "../Requests/CartRequest";
import {   CreateCartBody } from "../Types/cartCrud";
import { ApiResponse } from "../Types/userCrud";

function TestCarts() {
  const { authToken } = useContext(AuthContext);
  const [carts, setCarts] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        if (authToken) {
          const data: ApiResponse | string = await getAllCarts(authToken);
         console.log(data)
        }
      } catch (err) {
        setError("Erreur lors de la récupération des paniers");
        console.error("Erreur:", err);
      }
    };

    fetchCarts();
  }, [authToken]);

  const handleCreateCart = async () => {
    try {
      if (authToken) {
        const cartData: CreateCartBody = {
          idProducts: [2, 3]
        };
        const data: ApiResponse | string = await createCart(authToken, cartData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setCarts(data);
        }
      }
    } catch (err) {
      setError("Erreur lors de la création du panier");
      console.error("Erreur:", err);
    }
  };

  const handleUpdateCart = async (id: number) => {
    try {
      if (authToken) {
        const updateData: CreateCartBody = {
          idProducts: [8, 8, 6]
        };
        const data: ApiResponse | string = await updateCart(authToken, id, updateData);
       console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la mise à jour du panier");
      console.error("Erreur:", err);
    }
  };

  const handleGetCart = async (id: number) => {
    try {
      if (authToken) {
        const updateData: CreateCartBody = {
          idProducts: [8, 8, 6]
        };
        const data: ApiResponse | string = await getCart(authToken, id);
       console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la mise à jour du panier");
      console.error("Erreur:", err);
    }
  };

  const handleGetMyCart = async () => {
    try {
      if (authToken) {
      
        const data: ApiResponse | string = await getMyCart(authToken);
       console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la mise à jour du panier");
      console.error("Erreur:", err);
    }
  };

  const handleDeleteCart = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await deleteCart(authToken, id);
       console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la suppression du panier");
      console.error("Erreur:", err);
    }
  };

  return (
    <div>
      <h1>Tests des paniers</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button className="text-white bg-teal-500 p-2" onClick={handleCreateCart}>
          Click pour créer un panier
        </button><br /><br />
        <button className="text-white bg-rose-500 p-2" onClick={() => handleUpdateCart(1)}>
          Click pour mettre à jour un panier
        </button><br /><br />
        <button className="text-white bg-orange-500 p-2" onClick={() => handleGetCart(2)}>
          Click pour recuperer un panier specific
        </button><br /><br />
        <button className="text-white bg-violet-500 p-2" onClick={() => handleGetMyCart()}>
          Click pour recuperer mon panier 
        </button><br /><br />
        <button className="text-white bg-red-600 p-2" onClick={() => handleDeleteCart(4)}>
          Click pour supprimer un panier
        </button>
      </div>
    </div>
  );
}

export default TestCarts;
