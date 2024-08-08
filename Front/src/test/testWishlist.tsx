import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../hooks/AuthContext";
import { getAllWishlists, getWishlist, createWishlist, updateWishlist, deleteWishlist } from "../Requests/WishlistRequest";
import { ApiResponse } from "../Types/userCrud";
import { Wishlist, CreateWishlistBody, UpdateWishlistBody } from "../Types/wishlist";

function TestWishlists() {
  const { authToken } = useContext(AuthContext);
  const [wishlists, setWishlists] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWishlists = async () => {
      try {
        if (authToken) {
          const data: ApiResponse | string = await getAllWishlists(authToken);
          if (typeof data === 'string') {
            setError(data);
          } else {
            setWishlists(data);
          }
          console.log(data)
        }
      } catch (err) {
        setError("Erreur lors de la récupération des listes de souhaits");
        console.error("Erreur:", err);
      }
    };

    fetchWishlists();
  }, [authToken]);

  const handleCreateWishlist = async () => {
    try {
      if (authToken) {
        const wishlistData: CreateWishlistBody = {
          idProducts: [1, 2, 3]
        };
        const data: ApiResponse | string = await createWishlist(authToken, wishlistData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setWishlists(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la création de la liste de souhaits");
      console.error("Erreur:", err);
    }
  };

  const handleUpdateWishlist = async (id: number) => {
    try {
      if (authToken) {
        const wishlistData: UpdateWishlistBody = {
          idProducts: [12, 15, 13]
        };
        const data: ApiResponse | string = await updateWishlist(authToken, id, wishlistData);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setWishlists(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la mise à jour de la liste de souhaits");
      console.error("Erreur:", err);
    }
  };

  const handleGetWishlist = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await getWishlist(authToken, id);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setWishlists(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la recuperation de la liste de souhaits");
      console.error("Erreur:", err);
    }
  };


  const handleDeleteWishlist = async (id: number) => {
    try {
      if (authToken) {
        const data: ApiResponse | string = await deleteWishlist(authToken, id);
        if (typeof data === 'string') {
          setError(data);
        } else {
          setWishlists(data);
        }
        console.log(data)
      }
    } catch (err) {
      setError("Erreur lors de la suppression de la liste de souhaits");
      console.error("Erreur:", err);
    }
  };

  return (
    <div>
      <h1>Tests des listes de souhaits</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button className="text-white bg-teal-500 p-2" onClick={handleCreateWishlist}>
          Click pour créer une liste de souhaits
        </button><br /><br />
        <button className="text-white bg-rose-500 p-2" onClick={() => handleUpdateWishlist(3)}>
          Click pour mettre à jour une liste de souhaits
        </button><br /><br />

        <button className="text-white bg-violet-500 p-2" onClick={() => handleGetWishlist(2)}>
          Click pourcreer une liste de souhaits
        </button><br /><br />
        <button className="text-white bg-red-600 p-2" onClick={() => handleDeleteWishlist(2)}>
          Click pour supprimer une liste de souhaits
        </button>
      </div>
    </div>
  );
}

export default TestWishlists;
