import { useState, useEffect } from "react";
import Card from "../components/Card";
import fronts from "../data/fronts.json";
import getCards from "../generator/getCards";

const GamePage = () => {
  const [cards, setCards] = useState(getCards(fronts));

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
                matched: matchedCard
              };

            return  card;
          });
        });
      }
    }, 1500);

    return () => clearTimeout(cardTimeoutDelay);
  }, [cards]);

  const getOpenedCards = () => {
    return cards.filter((card) => card.open && !card.matched);
  };

  const openCard = (event, id) => {
    event.preventDefault();

    const openedCards = getOpenedCards();
    if (openedCards.length == 2) return;

    setCards((currentCard) =>
      currentCard.map((card) => {
        if (card.id === id) return { ...card, open: true, matched: false };
        return card;
      })
    );
  };

  return (
    <div className="container mx-auto py-10">
      <section className="px-6 grid grid-cols-card-size gap-10 w-full">
        {cards.map((card) => (
          <Card key={card.id} {...card} openCard={openCard}></Card>
        ))}
      </section>
    </div>
  );
};

export default GamePage;
