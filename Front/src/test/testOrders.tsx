import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getAllOrders, getOrder, createOrder, deleteOrder } from "../Requests/OrderRequest";
import { Order, CreateOrderBody } from "../Types/order";
import { ApiResponse } from "../Types/userCrud";

function TestOrders() {
  const { authToken } = useContext(AuthContext);
  const [orders, setOrders] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        if (authToken) {
          const data: ApiResponse | string = await getAllOrders(authToken);
          if (typeof data === 'string') {
            setError(data);
          } else {
            setOrders(data);
          }
          console.log(data)
        }
      } catch (err) {
        setError("Erreur lors de la récupération des commandes");
        console.error("Erreur:", err);
      }
    };

    fetchOrders();
  }, [authToken]);

  const handleCreateOrder = async (idCart:number) => {
    try {
      if (authToken) {
        const orderData: CreateOrderBody = {
          idCart: idCart
        };
        const data: ApiResponse | string = await createOrder(authToken, orderData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setOrders(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la création de la commande");
      console.error("Erreur:", err);
    }
  };

  const handleDeleteOrder = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await deleteOrder(authToken, id);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setOrders(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la suppression de la commande");
      console.error("Erreur:", err);
    }
  };

  return (
    <div>
      <h1>Tests des commandes</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button className="text-white bg-teal-500 p-2" onClick={()=>handleCreateOrder(2)}>
          Click pour créer une commande
        </button><br /><br />
        <button className="text-white bg-red-600 p-2" onClick={() => handleDeleteOrder(7)}>
          Click pour supprimer une commande
        </button>
      </div>
    </div>
  );
}

export default TestOrders;
