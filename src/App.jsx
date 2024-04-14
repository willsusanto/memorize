import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [cards, setCards] = useState([
    {
      id: "1",
      description: "Xiao",
      opened: false,
      completed: false,
    },
    {
      id: "2",
      description: "Diluc",
      opened: false,
      completed: false,
    },
    {
      id: "3",
      description: "Raiden",
      opened: false,
      completed: false,
    },
    {
      id: "4",
      description: "Ganyu",
      opened: false,
      completed: false,
    },
    {
      id: "5",
      description: "Hu Tao",
      opened: false,
      completed: false,
    },
    {
      id: "6",
      description: "Xiao",
      opened: false,
      completed: false,
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      const openedCards = cards.filter(
        (card) => card.opened && !card.completed
      );

      if (openedCards.length == 2) {
        const [firstCard, secondCard] = openedCards;

        if (firstCard.description === secondCard.description) {
          setCards((currentCard) =>
            currentCard.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, opened: true, completed: true };
              } else {
                return card;
              }
            })
          );
        } else {
          setCards((currentCard) =>
            currentCard.map((card) => {
              if (card.id === firstCard.id || card.id === secondCard.id) {
                return { ...card, opened: false, completed: false };
              } else {
                return card;
              }
            })
          );
        }
      }
    }, 2000);
  }, [cards]);

  const openCard = (event, id) => {
    event.preventDefault();

    const findCard = cards.find((card) => card.id === id);
    console.log(findCard);

    if (findCard == null) throw new Error("Error finding cards.");

    setCards((currentCard) =>
      currentCard.map((card) => {
        if (card.id === id) {
          return { ...card, opened: true };
        } else {
          return card;
        }
      })
    );
  };

  return (
    <>
      <div className="container mx-auto flex justify-center h-screen p-10">
        <section className="px-6 grid grid-cols-3 gap-6 w-full">
          {cards.map((card) => (
            <Card key={card.id} {...card} openCard={openCard}></Card>
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
