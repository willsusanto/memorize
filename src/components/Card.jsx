const Card = ({
  id,
  description,
  open,
  completed,
  processingMatch,
  openCard,
}) => {
  const defaultStyling = "p-6 rounded-lg aspect-square shadow-lg";
  return (
    <>
      {completed && <div className={`${defaultStyling} bg-black`}></div>}
      {open && !completed && (
        <div className={`${defaultStyling} bg-blue-500 hover:bg-blue-700`}>
          {description}
        </div>
      )}
      {!open && !completed && (
        <div
          onClick={(e) => !processingMatch && openCard(e, id)}
          className={`${defaultStyling} bg-gray-300 hover:bg-gray-500 transition duration-300`}
        ></div>
      )}
    </>
  );
};

export default Card;
