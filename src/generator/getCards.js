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

const selectCards = (fronts, cardsQuantity) => {
  const selectedFrontIndex = new Set();
  const cards = [];

  for (let i = 0; i < cardsQuantity / 2; ++i) {
    let randomNumber;
    do {
      randomNumber = getRandomNumber(0, fronts.length - 1);
    } while (selectedFrontIndex.has(randomNumber));

    const frontObject = fronts[randomNumber];
    selectedFrontIndex.add(randomNumber);

    let cardCopy = 2;
    while (cardCopy > 0) {
      const cardData = new CardData(
        crypto.randomUUID(),
        frontObject.frontId,
        frontObject.description,
        frontObject.description,
      );
      cards.push(cardData);
      cardCopy--;
    }
  }

  return cards;
};

/* Fisher-Yates Shuffle Algorithm */
const shuffleCards = (selectedCards, cardsQuantity) => {
  const endIndex = cardsQuantity - 1;
  for (let i = endIndex; i > 1; --i) {
    const randomNumber = getRandomNumber(0, endIndex);

    if (i === randomNumber) continue;
    const currentIndexValue = selectedCards[i];
    selectedCards[i] = selectedCards[randomNumber];
    selectedCards[randomNumber] = currentIndexValue;
  }

  return selectedCards;
};

const getCards = (fronts) => {
  const cardsQuantity = 8;
  if (fronts.length === 0) throw new Error("There's no front cards data!");
  if (cardsQuantity % 2) throw new Error("Please input an even card quantity.");

  const cards = selectCards(fronts, cardsQuantity);
  const shuffledCards = shuffleCards(cards, cardsQuantity);

  console.table("Cards before shuffled: ", cards);
  console.table("Cards after shuffled: ", shuffledCards);

  return shuffledCards;
};

export default getCards;
