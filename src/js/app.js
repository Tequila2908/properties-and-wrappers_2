
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function exportCards(object) {
  const { special: card } = object;
  const newCard = [];
  for (let i = 0; i < card.length; i++) {
    if ('description' in card[i]) {
      newCard.push(card[i]);
      continue;
    } else {
      newCard.push(card[i]);
      newCard[i].description = 'Описание недоступно';
    }
  }

  return newCard;
}
