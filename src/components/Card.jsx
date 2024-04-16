const Card = ({
  id,
  description,
  open,
  matched,
  processingMatch,
  openCard,
}) => {
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
    </>
  );
};

export default Card;
