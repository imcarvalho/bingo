import React, { useState } from 'react';
import {
  GlobalStyle,
  Wrapper,
  GetNewNumberButton,
  WinnerCard,
  WinnerWrapper,
  NumbersOut,
  LatestNumber,
} from './Bingo.styles';
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
    const winnerCards: number[] = [];
    const results = cards.map((card) => checkSubset(newNumbers, card));

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
      <GlobalStyle />
      <Wrapper>
        <WinnerWrapper>
          {winners.length > 0 && (
            <>
              <h1>Cartão vencedor!</h1>
              <WinnerCard>{winners.join(' ')}</WinnerCard>
              {winners.length < 3 &&
                winners.map((winner) => <p>{cards[winner - 1].join(', ')}</p>)}
            </>
          )}
        </WinnerWrapper>
        <LatestNumber>{numbersOut[numbersOut.length - 1]}</LatestNumber>
        <NumbersOut>
          Números que já saíram ({numbersOut.length}): <br />
          {numbersOut.join(', ')}
        </NumbersOut>
        <GetNewNumberButton
          onClick={handleOnGetNewNumber}
          disabled={numbersOut.length === 50}
        >
          Novo número
        </GetNewNumberButton>
      </Wrapper>
    </>
  );
};
