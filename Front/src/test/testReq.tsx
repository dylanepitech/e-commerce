import React, { useEffect, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getAllUser, createUser, updateUser, deleteUser } from "../Requests/UserCrudRequests";
import { ApiResponse, UserData, UpdateUserFields } from "../Types/userCrud";

function TestReq() {
  const { authToken } = useContext(AuthContext);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        if (authToken) {
          const data: any = await getAllUser(authToken);
          console.log("Profils récupérés:", data);
        }
      } catch (err) {
        console.error("Erreur lors de la récupération des profils:", err);
      }
    };

    fetchProfiles();
  }, [authToken]);

  const handleCreateUser = async (email: string, firstname: string, lastname: string, password: string) => {
    try {
      if (authToken) {
        const data: any = await createUser(authToken, email, firstname, lastname, password);
        console.log("Utilisateur créé:", data);
      }
    } catch (err) {
      console.error("Erreur lors de la création de l'utilisateur:", err);
    }
  };

  // const handleUpdateUser = async (id: number, email?: string, firstname?: string, lastname?: string, roles?: string, password?: string, picture?: string) => {
  const handleUpdateUser = async (id: number, email?: string, firstname?: string, lastname?: string) => {
    try {
      if (authToken) {
        const updateFields: UpdateUserFields = { email, firstname, lastname };
        const data: any = await updateUser(authToken, id, updateFields);
        console.log("Utilisateur mis à jour:", data);
      }
    } catch (err) {
      console.error("Erreur lors de la mise à jour de l'utilisateur:", err);
    }
  };

  const handleDeleteUser = async (id: number) => {
    try {
      if (authToken) {
        const data:any = await deleteUser(authToken, id);
        console.log("Utilisateur supprimé:", data);
      }
    } catch (err) {
      console.error("Erreur lors de la suppression de l'utilisateur:", err);
    }
  };

  return (
    <div>
      <h1>Voici tous les tests des requêtes</h1>
      <div>
        <button
          className="text-white bg-teal-500 p-2"
          onClick={() => handleCreateUser("deep@gmail.com", "Roland", "Garos", "admin")}
        >
          Click pour créer un User
        </button>
        <br /><br />
        <button
          className="text-white bg-rose-500 p-2"
          onClick={() => handleUpdateUser(24, "deep@gmail.com", "Du VI", "Garos")}
        >
          Click pour mettre à jour un User
        </button>
        <br /><br />
        <button
          className="text-white bg-red-600 p-2"
          onClick={() => handleDeleteUser(24)}
        >
          Click pour supprimer un User
        </button>
      </div>
    </div>
  );
}

export default TestReq;
