const Card = ({ color = "red", id, description, opened, completed, openCard }) => {
  return (
    <>
      {completed ? (
        <div className={`p-6 rounded-lg bg-black`}></div>
      ) : opened ? (
        <div className={`p-6 rounded-lg bg-blue-500 hover:bg-blue-700`}>
          {description}
        </div>
      ) : (
        <div onClick={(e) => openCard(e, id)} className={`p-6 rounded-lg bg-gray-300 hover:bg-gray-500 transition duration-300`}>
          
        </div>
      )}
    </>
  );
};

export default Card;
