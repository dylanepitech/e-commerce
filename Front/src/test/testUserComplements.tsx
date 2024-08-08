import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getUserComplements, createUserComplement, updateUserComplement, deleteUserComplement } from "../Requests/UserComplementRequest";
import { ApiResponse, UserComplementBody } from "../Types/userCrud";

function TestUserComplements() {
    const { authToken } = useContext(AuthContext);
    const [complements, setComplements] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComplements = async () => {
            try {
                if (authToken) {
                    const data: ApiResponse | string = await getUserComplements(authToken, 2); 

                    console.log(data)
                }
            } catch (err) {
                setError("Erreur lors de la récupération des compléments d'utilisateur");
                console.error("Erreur:", err);
            }
        };

        fetchComplements();
    }, [authToken]);

    const handleCreateComplement = async () => {
        try {
            if (authToken) {
                const complementData: UserComplementBody = {
                    zip_code: "13800",
                    adresse: "Saint bernabeou",
                    sexe: "homme",
                    phone: "3375643243"
                };
                const data: ApiResponse | string = await createUserComplement(authToken, complementData); 
                // if (typeof data === 'string') {
                //     setError(data);
                // } else {
                //     setComplements(data);
                // }
                console.log(data)
            }
        } catch (err) {
            setError("Erreur lors de la création du complément d'utilisateur");
            console.error("Erreur:", err);
        }
    };

    const handleUpdateComplement = async (id: number) => {
        try {
            if (authToken) {
                const updateData: Partial<UserComplementBody> = {
                    zip_code: "13009",
                    phone: "3300221144",
                    adresse:"Saint bernabeou",
                    sexe:"homme",
                };
                const data: ApiResponse | string = await updateUserComplement(authToken, id, updateData);
               console.log(data)
            }
        } catch (err) {
            setError("Erreur lors de la mise à jour du complément d'utilisateur");
            console.error("Erreur:", err);
        }
    };

    const handleDeleteComplement = async (id: number) => {
        try {
            if (authToken) {
                const data: ApiResponse | string = await deleteUserComplement(authToken, id);
                console.log(data)
            }
        } catch (err) {
            setError("Erreur lors de la suppression du complément d'utilisateur");
            console.error("Erreur:", err);
        }
    };

    return (
        <div>
            <h1>Tests des compléments d'utilisateur</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div>
                <button className="text-white bg-teal-500 p-2" onClick={handleCreateComplement}>
                    Click pour créer un complément
                </button><br /><br />
                <button className="text-white bg-rose-500 p-2" onClick={() => handleUpdateComplement(2)}>
                    Click pour mettre à jour un complément
                </button><br /><br />
                <button className="text-white bg-red-600 p-2" onClick={() => handleDeleteComplement(2)}>
                    Click pour supprimer un complément
                </button>
            </div>
        </div>
    );
}

export default TestUserComplements;
