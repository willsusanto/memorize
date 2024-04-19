class CardData {
  constructor(id, frontId, description, fileName) {
    this.id = id; //Randomly generated
    this.frontId = frontId; //Used for matching the cards
    this.description = description; //Use for alt-image
    this.fileName = fileName;
  }
}

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getCards = (fronts) => {
  const cardsQuantity = 8;

  if (fronts.length === 0) throw new Error("There's no front cards data!");
  if (cardsQuantity % 2) throw new Error("Please input an even card quantity.");

  const selectedFrontIndex = new Set();
  const cards = [];

  for (let i = 0; i < cardsQuantity / 2; ++i) {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(0, fronts.length - 1);
    } while (selectedFrontIndex.has(randomNumber));

    const frontObject = fronts[randomNumber];
    selectedFrontIndex.add(randomNumber);

    const cardData = new CardData(
      crypto.randomUUID(),
      frontObject.frontId,
      frontObject.description,
      frontObject.description,
    );
    cards.push(cardData);
    cards.push({ ...cardData, id: crypto.randomUUID()})
  }

  return cards;
};

export default getCards;
