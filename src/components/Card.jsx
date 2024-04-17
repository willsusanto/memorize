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
  return (
    <>
      {completed && <div className={`${defaultStyling} bg-black`}></div>}
      {open && (
        <div className={`${defaultStyling} bg-blue-500 hover:bg-blue-700`}>
          {description}
        </div>
      )}
      {!open && (
        <div
          onClick={(e) => !processingMatch && openCard(e, id)}
          className={`${defaultStyling} bg-card-back hover:bg-gray-500 transition duration-300`}
        >
          <img src={CardBack} className="object-contain"></img>
        </div>
      )}
    </>
  );
};

export default Card;
