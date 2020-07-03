import * as React from "react";
import ScoreCounter from "./score-counter";
import { PlayerStats } from "../score-tracker/score-tracker-container";

interface Props {
  playerOne?: PlayerStats;
  playerTwo?: PlayerStats;
  setPlayerOne?: (stats: PlayerStats) => void;
  setPlayerTwo?: (stats: PlayerStats) => void;
}

const ScoreCounterContainer: React.FC<Props> = ({
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
}) => {
  const [playerScoreCount, setPlayerScoreCount] = React.useState(0);

  React.useEffect(() => {
    if (playerOne && playerScoreCount >= 0) {
      setPlayerOne({
        ...playerOne,
        pointsNeeded: playerOne.totalNeeded - playerScoreCount,
      });
    }
    if (playerTwo && playerScoreCount >= 0) {
      setPlayerTwo({
        ...playerTwo,
        pointsNeeded: playerTwo.totalNeeded - playerScoreCount,
      });
    }
  }, [playerScoreCount]);

  return (
    <ScoreCounter
      playerScoreCount={playerScoreCount}
      setPlayerScoreCount={setPlayerScoreCount}
      playerOne={playerOne}
      playerTwo={playerTwo}
    />
  );
};

export default ScoreCounterContainer;
