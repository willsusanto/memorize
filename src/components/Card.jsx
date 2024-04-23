import CardBack from "../assets/fatui.png";
import { useImage } from "../hooks/useImage";

const Card = ({ id, description, open, matched, openCard, fileName }) => {
  const { image, loading, error } = useImage(fileName);
  const defaultStyling = "rounded-card-edge aspect-square flex justify-center shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)]";

  if (error) return <h1>Sorry! An error had occurred: {error.message}</h1>;

  return (
    <>
        <div
          onClick={(e) => openCard(e, id)}
          className={`flipCardBase relative transition duration-500 ${(open || matched) && "flipping"} ${defaultStyling}`}
        >
          <div className={`front ${matched ? "bg-green-500" : "bg-blue-100"} flipping rounded-card-edge`}>
            {loading && <h1>Image loading...</h1>}
            {!loading && <img src={image} className="object-contain rounded-card-edge" />}
          </div>
          <div className="back bg-card-back rounded-card-edge transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-105">
            <img src={CardBack} className="object-contain rounded-card-edge"></img>
          </div>
        </div>
      
    </>
  );
};

export default Card;