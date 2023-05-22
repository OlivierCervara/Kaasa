import React from "react";
import "./ApartmentCard.scss";
import { Link } from "react-router-dom";
import "./ApartmentCard.scss";

function ApartmentCard(props) {
  return (
    <Link // définit un lien vers une autre page de l'application en utilisant l'adresse "/flat" et en passant un objet "state" qui contient l'identifiant de l'appartement en question.
      to="/flat"
      state={{
        apartmentId: props.id //utilisé pour transmettre l'identifiant de l'appartement dans l'objet "state"
      }}
    >
      <div className="apartment">
        <img src={props.imageUrl} alt="" /> 
        <div className="apartment__subtitle">{props.title}</div>
      </div>
    </Link>
  );
}

export default ApartmentCard;

