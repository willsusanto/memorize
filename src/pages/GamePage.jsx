import { useState, useEffect, useRef } from "react";
import Card from "../components/Card";
import cardsData from "../data/data.json";

const GamePage = () => {
  const [cards, setCards] = useState(cardsData);
  const flipCard = useRef(null);

  useEffect(() => {
    const cardTimeoutDelay = setTimeout(() => {
      const openedCards = getOpenedCards();

      if (openedCards.length == 2) {
        const [firstCard, secondCard] = openedCards;
        const matchedCard = firstCard.description === secondCard.description;

        setCards((currentCards) => {
          return currentCards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id)
              return {
                ...card,
                open: false,
                completed: matchedCard,
                processingMatch: false,
              };

            return { ...card, processingMatch: false };
          });
        });
      }
    }, 1500);

    return () => clearTimeout(cardTimeoutDelay);
  }, [cards]);

  const getOpenedCards = () => {
    return cards.filter((card) => card.open && !card.completed);
  };

  const openCard = (event, id) => {
    event.preventDefault();

    const openedCards = getOpenedCards();

    setCards((currentCard) =>
      currentCard.map((card) => {
        if (card.id === id) return { ...card, open: true, completed: false };
        if (openedCards.length == 1) return { ...card, processingMatch: true };

        return card;
      })
    );
  };

  const handleRotate = (rotate) => {
    console.log(flipCard);
    if (rotate) flipCard.current.classList.add("rotating");
    else flipCard.current.classList.remove("rotating");
  };

  return (
    <>
    <button onClick={() => handleRotate(false)}>Rotate back</button>
      <div className="flipCardContainer">
        <div
          ref={flipCard}
          className="flipCard"
          onClick={() => handleRotate(true)}
        >
          <div className="front">Testing FRONT</div>
          <div className="back">Testing BACK</div>
        </div>
      </div>
    </>
    // <div className="container mx-auto">
    //   <section className="px-6 grid grid-cols-card-size gap-3 w-full">
    //     {cards.map((card) => (
    //       <Card key={card.id} {...card} openCard={openCard}></Card>
    //     ))}
    //   </section>
    // </div>
  );
};

export default GamePage;
