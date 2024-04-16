const Card = ({ color = "red", id, description, open, completed, openCard, disabled }) => {
  return (
    <>
      {completed ? (
        <div className={`p-6 rounded-lg bg-black`}></div>
      ) : open ? (
        <div className={`p-6 rounded-lg bg-blue-500 hover:bg-blue-700`}>
          {description}
        </div>
      ) : (
        <div onClick={(e) => !disabled && openCard(e, id)} className={`p-6 rounded-lg bg-gray-300 hover:bg-gray-500 transition duration-300`}
          >
        </div>
      )}
    </>
  );
};

export default Card;
