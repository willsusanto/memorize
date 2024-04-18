import CardBack from "../assets/back.png";
import { useRef, useEffect } from "react";

const Card = ({
  id,
  description,
  open,
  completed,
  processingMatch,
  openCard,
}) => {
  const defaultStyling = "rounded-lg aspect-square flex justify-center";
  const flipCard = useRef(null);

  useEffect(() => {
    if (open) {
      flipCard.current.classList.add("rotating");
    } else flipCard.current.classList.remove("rotating");
  }, [open]);

  const handleRotate = (e, id) => {
    openCard(e, id);
  };

  return (
    <>
      {/* <button onClick={() => handleRotate(false)}>Rotate back</button>
      <div className="flipCardContainer">
        <div
          ref={flipCard}
          className="flipCard"
          onClick={() => handleRotate(true)}
        >
          <div className="front">Testing FRONT</div>
          <div className="back">Testing BACK</div>
        </div>
      </div> */}

      {completed && <div className={`${defaultStyling} bg-black`}></div>}

      <div
        ref={flipCard}
        onClick={(e) => handleRotate(e, id, true)}
        className={`${defaultStyling} transition duration-300 relative flipCard`}
      >
        <div className="front bg-white">{description}</div>

        <div className="back bg-card-back">
          <img src={CardBack} className="object-contain"></img>
        </div>
      </div>
    </>
  );
};

export default Card;
