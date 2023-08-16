import { useState } from "react";
import GameEndScreen from "./screens/GameEnd";
import UserSuggestion from "./screens/UserSuggestion";
import UserNumberSelection from "./screens/UserNumberSelection";

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [computerGuesses, setComputerGuesses] = useState<number[]>([]);
  const [isGameEnd, setGameEnd] = useState(false);

  const lastComputerGuess =
    computerGuesses?.length > 0 ? computerGuesses[0] : null;

  const resetGame = () => {
    setUserNumber(null);
    setComputerGuesses([]);
    setGameEnd(false);
  };

  if (!userNumber) return <UserNumberSelection selectNumber={setUserNumber} />;
  if (isGameEnd)
    return (
      <GameEndScreen
        numberOfGuesses={computerGuesses.length}
        reset={resetGame}
      />
    );

  return <UserSuggestion computerValue={lastComputerGuess} />;
}
