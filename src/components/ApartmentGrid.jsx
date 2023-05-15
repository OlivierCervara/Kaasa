import React from "react";
import "./ApartmentGrid.scss";
import ApartmentCard from "./ApartmentCard.jsx";
import { useApartments } from "./../hooks/useApartments.jsx"; //un hook est une fonction qui commence par use

function ApartmentGrid() {
  const apartments = useApartments(); //le hook "useApartments" pour récupérer la liste des appartements à afficher dans la grille et la stocke dans la constante "apartments".
  return (
    <div className="grid">
      {apartments.map((apartment) => ( //la méthode "map" pour parcourir chaque appartement dans la liste "apartments" et retourner un élément "ApartmentCard" pour chaque appartement.
        <ApartmentCard //Chaque élément "ApartmentCard" est initialisé avec les propriétés "title", "imageUrl", "id" et "key", qui sont extraites de l'objet "apartment" actuel dans la boucle "map"
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id} // l'attribut "key" est utilisé pour aider React à suivre les éléments dans une liste et à optimiser les performances en minimisant les ré-renderings.
        />
      ))}
    </div>
  );
}

export default ApartmentGrid;