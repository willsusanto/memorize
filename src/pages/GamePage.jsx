import { useState, useEffect, useMemo } from "react";
import Card from "../components/Card";
import fronts from "../data/fronts.json";
import getCards from "../generator/getCards";
import getHealth from "../generator/getHealth";
import HealthBar from "../components/HealthBar";

const GamePage = () => {
  const [cards, setCards] = useState(() => getCards(fronts));
  const [health, setHealth] = useState(() => getHealth());

  const isGameOver = useMemo(() => {
    return health.find((bar) => bar.active) === undefined;
  }, [health]);

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
                matched: matchedCard,
              };

            return card;
          });
        });

        if (!matchedCard) {
          const lastHealthIndex = health.length - 1;
          setHealth((currentHealth) => {
            return currentHealth.map((healthData, index) => {
              if (
                (index === lastHealthIndex && healthData.active) ||
                (index !== lastHealthIndex && !health[index + 1]?.active)
              ) {
                return {
                  ...healthData,
                  active: false,
                };
              }
              return healthData;
            });
          });
        }
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
      }),
    );
  };

  return (
    <div id="star-container">
      <div id="star-pattern"></div>
      <div id="star-gradient-overlay"></div>

      <div className="container relative z-[2] mx-auto flex flex-col items-center py-10">
        <section className="grid grid-cols-card-size-2 gap-10 px-6 md:grid-cols-card-size">
          <HealthBar health={health} />

          {cards.map((card) => (
            <Card key={card.id} {...card} openCard={openCard}></Card>
          ))}
        </section>
      </div>
    </div>
  );
};

export default GamePage;
