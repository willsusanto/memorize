import { useState, useEffect } from "react";
import Card from "../components/Card";
import cardsData from "../data/data.json";

const GamePage = () => {
  const [cards, setCards] = useState(cardsData);

  useEffect(() => {
    const cardTimeoutDelay = setTimeout(() => {
      const openedCards = getOpenedCards();

      if (openedCards.length == 2) {
        const [firstCard, secondCard] = openedCards;
        const matchedCard = firstCard.description === secondCard.description;

        setCards(currentCards => {
            return currentCards.map(card => {
                if (card.id === firstCard.id || card.id === secondCard.id)
                    return { ...card, open: false, completed: matchedCard, processingMatch: false };

                return { ...card, processingMatch: false }
            })
        })
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

  return (
    <div className="container mx-auto flex justify-center h-screen p-10">
      <section className="px-6 grid grid-cols-3 gap-6 w-full">
        {cards.map((card) => (
          <Card key={card.id} {...card} openCard={openCard}></Card>
        ))}
      </section>
    </div>
  );
};

export default GamePage;
