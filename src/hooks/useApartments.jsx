import { useState, useEffect } from "react";

export const useApartments = () => {
  const [apartments, setApartments] = useState([]); //définit une variable d'état nommée apartments, initialisée avec un tableau vide []. La fonction setApartments est également définie et sera utilisée pour mettre à jour la variable d'état.
  useEffect(() => { //Declenche l'effet de la récupération des données
    const abortController = new AbortController();
    fetch("db.json", { signal: abortController.signal }) //requête fetch pour récupérer les données du fichier JSON "db.json". La propriété signal de l'objet abortController est passée en option pour permettre d'annuler la requête en cas de besoin.
      .then((res) => res.json()) //récupère la réponse de la requête fetch sous forme de JSON.
      .then((res) => setApartments(res)) //utilise la fonction setApartments pour mettre à jour la variable d'état apartments avec les données récupérées du fichier JSON.
      .catch(console.error);
  }, []);
  return apartments; //retourne la variable d'état apartments, qui contient les données récupérées du fichier JSON.
};