import React from "react";
import "./ApartmentHeader.scss";

export function ApartmentHeader({ flat }) {
  const { name } = flat.host; //extrait d'abord le nom du propriétaire à partir de l'objet "host" de l'appartement
  const [firstName, lastName] = name.split(" "); //méthode "split" pour diviser le nom en prénom et nom de famille.méthode "split" pour diviser le nom en prénom et nom de famille.

  return ( //l'élément DOM qui affiche les détails de l'appartement.
    <div className="apartment__header">
      <div className="apartment__title">
        <h1>{flat.title}</h1> {/*Les balises sont stockées dans un tableau dans l'objet flat et sont affichées en utilisant la méthode map*/}
        <h2>{flat.location}</h2>
        <div className="apartment__tags">
          {flat.tags.map((tag) => (
            <span key={tag}>{tag}</span> 
          ))} {/*Pour chaque balise, un élément span est créé avec la balise en tant que contenu et une clé unique basée sur la balise elle-même. */}
        </div>
      </div>
      <div className="apartment__owner">
        <div className="apartment__owner__details">
          <h3>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h3>
          <div className="apartment__owner__badge">
            <img src={flat.host.picture} alt="" />
          </div>
        </div>
        <div className="apartment__owner__stars">
          {[1, 2, 3, 4, 5].map((num) => ( //en utilisant une boucle map pour créer un certain nombre d'étoiles pleines ou vides en fonction de la note de l'hôte.
            <span key={num} className={flat.rating >= num ? "on" : ""}> 
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}