import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export function useApartment() {
  const [flat, setFlat] = useState(null); //initialise une variable d'état appelée flat à null et une fonction de mise à jour de l'état appelée setFlat.
  const location = useLocation(); //fonction fournie par la bibliothèque react-router-dom pour récupérer l'objet location de la page.

  useEffect(() => {
    const abortController = new AbortController(); //crée un objet AbortController qui est utilisé pour interrompre les requêtes fetch en cours si nécessaire.
    fetch("db.json", { signal: abortController.signal }) //récupère un fichier JSON appelé db.json en utilisant la méthode fetch. Le deuxième argument de fetch est un objet qui contient le signal du contrôleur AbortController pour permettre l'annulation de la requête.
      .then((res) => res.json()) //convertit la réponse de la requête fetch en un objet JSON.
      .then((flats) => {
        const flat = flats.find((flat) => flat.id === location.state.apartmentId); //utilise la méthode find pour récupérer l'objet de l'appartement qui correspond à l'ID de l'appartement passé en tant que propriété d'état dans l'objet location.
        setFlat(flat); //Le résultat de cette recherche est stocké dans la variable flat en utilisant la fonction setFlat.
      })
      .catch(console.error);
  },);
  return flat; //renvoie la variable flat, qui est soit null si la requête fetch n'a pas encore renvoyé de résultat, soit l'objet flat contenant les détails de l'appartement correspondant à l'ID de l'appartement dans l'objet location.
}