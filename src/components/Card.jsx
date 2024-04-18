import CardBack from "../assets/back.png";
import { useState, useEffect } from "react";

const Card = ({
  id,
  description,
  open,
  completed,
  processingMatch,
  openCard,
  imagePath
}) => {
  const defaultStyling = "rounded-lg aspect-square flex justify-center";
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const image = await import(imagePath);
        setImageUrl(image.default);
        return image.default;
      } catch (error){
        return null;
      }
    }
    
    fetchImage();
  }, [imagePath]);

  const handleRotate = (e, id) => {
    openCard(e, id);
  };

  return (
    <>
      {completed && <div className={`${defaultStyling} bg-black`}></div>}

      <div
        onClick={(e) => handleRotate(e, id, true)}
        className={`${defaultStyling} transition duration-300 relative flipCard ${open ? "rotating" : ""}`}
      >
        <div className="front bg-white">
          <img src={imageUrl} className="object-contain" />
        </div>

        <div className="back bg-card-back">
          <img src={CardBack} className="object-contain"></img>
        </div>
      </div>
    </>
  );
};

export default Card;