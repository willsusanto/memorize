import CardBack from "../assets/back.png";

const Card = ({
  id,
  description,
  open,
  completed,
  processingMatch,
  openCard,
}) => {
  const defaultStyling = "rounded-lg aspect-square flex justify-center";

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
        onClick={(e) => handleRotate(e, id, true)}
        className={`${defaultStyling} transition duration-300 relative flipCard ${open ? "rotating" : ""}`}
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
