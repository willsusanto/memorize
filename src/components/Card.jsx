import CardBack from "../assets/back.png";
import { useState, useEffect } from "react";

const Card = ({
  id,
  description,
  open,
  matched,
  processingMatch,
  openCard,
  imagePath
}) => {
<<<<<<< HEAD
  const defaultStyling = "p-6 rounded-lg aspect-square shadow-lg";
  return (
    <>
      {matched && <div className={`${defaultStyling} bg-black`}></div>}
      {open && !matched && (
        <div className={`${defaultStyling} bg-blue-500 hover:bg-blue-700`}>
          {description}
        </div>
      )}
      {!open && !matched && (
        <div
          onClick={(e) => openCard(e, id)}
          className={`${defaultStyling} bg-gray-300 hover:bg-gray-500 transition duration-300`}
        ></div>
      )}
=======
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
>>>>>>> 251bfeb3d57b5b0be6009b0cf74f7a5ac95c8175
    </>
  );
};

export default Card;