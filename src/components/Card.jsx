import CardBack from "../assets/back.png";
import { useImage } from "../hooks/useImage";

const Card = ({ id, description, open, matched, openCard, fileName }) => {
  const { image, loading, error } = useImage(fileName);
  const defaultStyling = "rounded-lg aspect-square flex justify-center";

  if (error) return <h1>Sorry! An error had occurred: {error.message}</h1>;

  return (
    <>
      {matched ? (
        <div className={`${defaultStyling} bg-black`}></div>
      ) : (
        <div
          onClick={(e) => openCard(e, id)}
          className={`flipCardBase relative transition duration-500 ${open && "flipping"} ${defaultStyling}`}
        >
          <div className="front flipping">
            {loading && <h1>Image loading...</h1>}
            {!loading && <img src={image} className="object-contain" />}
          </div>

          <div className="back bg-card-back">
            <img src={CardBack} className="object-contain"></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
