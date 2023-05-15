import React, { useState } from "react";
import "./ImageBanner.scss";

export function ImageBanner(props) {
  const pictures = props.pictures; //le composant reçoit un objet props qui contient les images à afficher dans la bannière. Ces images sont stockées dans un tableau "pictures" en utilisant la déstructuration de l'objet props.

  const [currentPicture, setCurrentPicture] = useState(0); //On utilise la fonction useState pour créer une variable d'état currentPicture qui va stocker l'index de l'image actuellement affichée dans la bannière.

  const getClassName = (i) => { //getClassName qui prend un index i en entrée et renvoie une classe CSS "show" si i correspond à l'index de l'image actuellement affichée, et une chaîne de caractères vide sinon
    if (i === currentPicture) return "show";
    return "";
  };

  const moveToNext = () => { //pour passer à l'image suivante
    setCurrentPicture((currentPicture + 1) % pictures.length); //incrémente simplement l'index de l'image actuellement affichée, en s'assurant qu'il reste dans les limites du tableau d'images pictures
  };

  const moveToPrevious = () => { //pour passer à l'image précédente
    const newCurrentPicture = currentPicture - 1; //décrémente l'index de l'image actuellement affichée, mais si l'index est déjà 0, elle le remplace par l'index de la dernière image du tableau pictures
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
    setCurrentPicture(currentPicture - 1);
  };

  const arePicturesAvailable = () => { //renvoie true si le tableau pictures est défini et contient au moins une image.
    return pictures && pictures.length > 0;
  };

  const getCarouselOrDefaultImage = () => { //renvoie soit un composant img pour chaque image dans le tableau pictures, soit une image par défaut si pictures est vide
    if (!arePicturesAvailable()) { //Si pictures est vide, on affiche une image par défaut
      return <img src="about-banner.png" className="show" alt="" />;
    }
    return pictures.map((pic, i) => ( //Si pictures contient des images, on affiche les boutons de défilement moveToPrevious et moveToNext ainsi qu'un compteur de diapositives pour indiquer quelle image est actuellement affichée.
      <img key={pic} src={pic} alt="" className={getClassName(i)}></img> //La classe de chaque image est déterminée en appelant la fonction getClassName
    ));
  };

  return (
    <div className="image__banner">
      <div className="image__container">{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && (
        <>
          <button className="btn btn-previous" onClick={moveToPrevious}>
            <i className="fas fa-chevron-left"></i>
          </button>
          <span className="slide-counter">
            {currentPicture + 1} / {pictures.length}
          </span>
          <button className="btn btn-next" onClick={moveToNext}>
            <i className="fas fa-chevron-right"></i>
          </button>
        </>
      )}
    </div>
  );
}

