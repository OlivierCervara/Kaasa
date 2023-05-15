import React, { useState } from "react";
import "./DescriptionPanel.scss";

export function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(true); // défini un état local à l'aide du hook useState. Définit la variable "isContentVisible" et la fonction "setIsContentVisible" pour gérer si le contenu du panneau est visible ou non. Par défaut, "isContentVisible" est initialisé à "true", donc le contenu est visible par défaut.

  const showContent = () => { // la fonction "showContent" est définie pour inverser la valeur de "isContentVisible" lorsqu'elle est appelée. Cela permet de cacher ou de montrer le contenu du panneau en cliquant sur le titre.
    setIsContentVisible(!isContentVisible);
  };
  const contentClass = (isContentVisible ? "visible" : "hidden") + " description__content"; //La variable "contentClass" est ensuite définie pour déterminer quelle classe CSS appliquer à la section de contenu. Si "isContentVisible" est vrai, alors la classe "visible" est utilisée, sinon la classe "hidden" est utilisée. Ensuite, la classe "description__content" est toujours ajoutée.
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas"; //La variable "chevronClass" est ensuite définie pour déterminer quelle icône chevron (vers le haut ou vers le bas) à afficher en fonction de si le contenu est visible ou non. Encore une fois, la classe "fas" est toujours ajoutée.
  return (
    <div className="description__panel">
      <p className="description__header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  );
}

export default DescriptionPanel;