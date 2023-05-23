import React, { useState } from 'react';
import { cards } from './cards';

function randomIntFromInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkSubset(parentArray: number[], subsetArray: number[]) {
  return subsetArray.every((number) => parentArray.includes(number));
}

export const Bingo = () => {
  const [numbersOut, setNumbersOut] = useState<number[]>([]);
  const [winners, setWinners] = useState<number[]>([]);

  const checkCards = (newNumbers: number[]) => {
    const results = cards.map((card) => checkSubset(newNumbers, card));

    const winnerCards: number[] = [];

    results.forEach((result, index) => {
      if (result === true) {
        winnerCards.push(index + 1);
      }
    });

    if (winnerCards.length) {
      setWinners(winnerCards);
    }
  };

  const handleOnGetNewNumber = () => {
    const newNumber = randomIntFromInterval(1, 50);

    if (numbersOut.includes(newNumber)) {
      handleOnGetNewNumber();
    } else {
      const newArray = [...numbersOut, newNumber];
      setNumbersOut(newArray);
      checkCards(newArray);
    }
  };

  return (
    <>
      <h1>Bingo incrível</h1>
      <button
        onClick={handleOnGetNewNumber}
        disabled={numbersOut.length === 50}
      >
        Novo número
      </button>
      <p>Números que já saíram ({numbersOut.length}):</p>
      <p>{numbersOut.join(', ')}</p>
      {winners.length > 0 &&
        winners.map((winner) => (
          <>
            <h2>Cartão vencedor!</h2>
            <strong>{winner}</strong>
            <p>{cards[winner - 1].join(', ')}</p>
          </>
        ))}
    </>
  );
};
