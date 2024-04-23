import CardBack from "../assets/fatui.png";
import { useImage } from "../hooks/useImage";

const Card = ({ id, description, open, matched, openCard, fileName }) => {
  const { image, loading, error } = useImage(fileName);
  const defaultStyling =
    "rounded-card-edge aspect-square flex justify-center shadow-[0px_5px_16px_1px_rgba(0,0,0,0.5)]";

  if (error) return <h1 className="font-genshin">Sorry! An error had occurred: {error.message}</h1>;

  return (
    <>
      {matched ? (
        <div
          className={`opacity-0 transition-opacity duration-500 ${defaultStyling} `}
        ></div>
      ) : (
        <div
          onClick={(e) => openCard(e, id)}
          className={`flipCardBase relative transition duration-500 ${open && "flipping"} ${defaultStyling}`}
        >
          <div className={`front flipping rounded-card-edge bg-blue-100`}>
            {loading && <h1 className="font-genshin">Image loading...</h1>}
            {!loading && (
              <img src={image} className="rounded-card-edge object-contain" alt={description}/>
            )}
          </div>
          <div className="back rounded-card-edge bg-card-back transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:brightness-105">
            <img
              src={CardBack}
              className="rounded-card-edge object-contain"
            ></img>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
