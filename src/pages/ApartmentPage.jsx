import { DescriptionPanel } from "../components/DescriptionPannel";
import "./ApartmentPage.scss";
import { ImageBanner } from "../components/ImageBanner";
import { ApartmentHeader } from "../components/ApartmentHeader";
import { useApartment } from "../hooks/useApartment";

function ApartmentPage() {
  const flat = useApartment(); //pour récupérer les informations d'un appartement

  if (flat == null) return <div>Loading...</div>; //Si les informations n'ont pas encore été récupérées, un message de chargement est affiché.
  return ( //Si l'objet "flat" est disponible :
    <div className="apartment-page">
      <ImageBanner pictures={flat.pictures} /> {/*liste d'images de l'appartement "flat.pictures". */}
      <ApartmentHeader flat={flat} /> {/*l'objet "flat" contenant les informations sur l'appartement. */}
      <div className="apartment__description__area">
        <DescriptionPanel title="Description" content={flat.description} /> {/*utilise la propriété "title" pour afficher le titre "Description" et la propriété "content" pour afficher la description de l'appartement. */}
        <DescriptionPanel
          title="Equipements" //utilise la propriété "title" pour afficher le titre "Equipements", 
          content={flat.equipments.map((eq, i) => ( //et utilise la méthode ".map" pour afficher chaque équipement de la liste "flat.equipments" sous la forme d'une liste HTML.
            <li key={i}>{eq}</li>
          ))}
        />
      </div>
    </div>
  );
}

export default ApartmentPage;