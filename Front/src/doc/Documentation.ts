// Cette mini documentation consiste a expliquer l'utilisation des requests

// !important de import la request : import { getAllUser } from "../Requests/UserCrudRequests";

// 1- Dans la page qui appelera la request il vous faudra un useEffect avec une fonction asynchrone


// 2- Ensuite il faudra faire appel a la request en mettant les paramettres attendu

// 3- Voici un petit exemple d'utilisation


// useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         if (authToken) {
//          
//           const data: any = await getAllUser(authToken);

//           setProfile(data);
//           console.log("Profil récupéré:", data);
//         }
//       } catch (err) {
//         setError("Erreur lors de la récupération des users");
//         console.error("Erreur:", err);
//       }
//     };

//     fetchProfile();
//   }, [authToken]);


// 4- Le code de l'etape 3 permet de recuperer tous les users de la db

// 5- En vous basant sur ce format vous pourrez acceder a toutes 


// 6- 😉 Ne pas hesiter a check le dossier Requests pour voir les requests Disponibles 😉

// 7- A vous d'adapter selon vos besoins