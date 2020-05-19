
/* eslint-disable no-plusplus */
/* eslint-disable no-continue */
// // TODO: write your code here
// import sum from './basic';

// console.log('worked');

// console.log(sum([1, 2]));

export default function exportCards(object) {
  const { special: card } = object;

  for (let i = 0; i < card.length; i++) {
    if ('description' in card[i]) {
      continue;
    } else {
      card[i].description = 'Описание недоступно';
    }
  }

  return card;
}
