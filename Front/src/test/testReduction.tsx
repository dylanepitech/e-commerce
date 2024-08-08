import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getAllReductions, getReduction, createReduction, updateReduction, deleteReduction } from "../Requests/ReductionRequest";
import { ApiResponse } from "../Types/userCrud";
import {  CreateReductionBody, UpdateReductionBody } from "../Types/reduction";

function TestReductions() {
  const { authToken } = useContext(AuthContext);
  const [reductions, setReductions] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReductions = async () => {
      try {
        if (authToken) {
          const data: ApiResponse | string = await getAllReductions(authToken);
          if (typeof data === 'string') {
            setError(data);
          } else {
            setReductions(data);
          }
          console.log(data)
        }
      } catch (err) {
        setError("Erreur lors de la récupération des réductions");
        console.error("Erreur:", err);
      }
    };

    fetchReductions();
  }, [authToken]);

  const handleCreateReduction = async () => {
    try {
      if (authToken) {
        const reductionData: CreateReductionBody = {
          idCategory: 1,
          reduction: 10,
          end_at: "2024-07-29 12:13:41"
        };
        const data: ApiResponse | string = await createReduction(authToken, reductionData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setReductions(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la création de la réduction");
      console.error("Erreur:", err);
    }
  };

  const handleUpdateReduction = async (id: number) => {
    try {
      if (authToken) {
        const reductionData: UpdateReductionBody = {
          reduction: 25
        };
        const data: ApiResponse | string = await updateReduction(authToken, id, reductionData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setReductions(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la mise à jour de la réduction");
      console.error("Erreur:", err);
    }
  };

  const handleGetReduction = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await getReduction(authToken, id);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setReductions(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la recuperation de la reduction");
      console.error("Erreur:", err);
    }
  };

  const handleDeleteReduction = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await deleteReduction(authToken, id);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setReductions(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la suppression de la réduction");
      console.error("Erreur:", err);
    }
  };

  return (
    <div>
      <h1>Tests des réductions</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button className="text-white bg-teal-500 p-2" onClick={handleCreateReduction}>
          Click pour créer une réduction
        </button><br /><br />
        <button className="text-white bg-rose-500 p-2" onClick={() => handleUpdateReduction(1)}>
          Click pour mettre à jour une réduction
        </button><br /><br />
        <button className="text-white bg-violet-500 p-2" onClick={() => handleGetReduction(2)}>
          Click pour recuperer une reduction specifique
        </button><br /><br />
        <button className="text-white bg-red-600 p-2" onClick={() => handleDeleteReduction(1)}>
          Click pour supprimer une réduction
        </button>
      </div>
    </div>
  );
}

export default TestReductions;
