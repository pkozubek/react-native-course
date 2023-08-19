import { useState } from "react";
import GameEnd from "./screens/GameEnd";
import Game from "./screens/Game";
import GameStart from "./screens/GameStart";
import { MAX, MIN } from "./utils/const";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [computerGuesses, setComputerGuesses] = useState<number[]>([]);
  const [isGameEnd, setGameEnd] = useState(false);
  const [currentRange, setCurrentRange] = useState({ min: MIN, max: MAX });

  const resetGame = () => {
    setUserNumber(null);
    setComputerGuesses([]);
    setGameEnd(false);
    setCurrentRange({
      max: MAX,
      min: MIN,
    });
  };

  const generateNextGuess = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const onSelectNumber = (userNumber: number) => {
    setUserNumber(userNumber);
    setComputerGuesses((currentGuesses) => [
      ...currentGuesses,
      generateNextGuess(MIN, MAX),
    ]);
  };

  const onNumberSuggestion = (isBiggerThanLastNumber: boolean) => {
    let currentMin = currentRange.min;
    let currentMax = currentRange.max;

    const lastGuess = computerGuesses[computerGuesses.length - 1];

    if (isBiggerThanLastNumber) {
      currentMin = lastGuess + 1;
    } else {
      currentMax = lastGuess - 1;
    }

    const nextNumber = generateNextGuess(currentMin, currentMax);

    setComputerGuesses((currentGuesses) => [...currentGuesses, nextNumber]);

    if (userNumber === nextNumber) {
      setGameEnd(true);
    } else {
      setCurrentRange({
        max: currentMax,
        min: currentMin,
      });
    }
  };

  console.log(currentRange);

  if (!userNumber) return <GameStart selectNumber={onSelectNumber} />;
  if (isGameEnd)
    return (
      <GameEnd numberOfGuesses={computerGuesses.length} reset={resetGame} />
    );

  return (
    <Game
      reset={resetGame}
      computerGuesses={computerGuesses}
      suggestNumber={onNumberSuggestion}
      userNumber={userNumber}
    />
  );
}
