import * as React from "react";
import * as Styled from "./score-counter.styled";
import { PlayerStats } from "../score-tracker/score-tracker-container";

interface Props {
  playerScoreCount: number;
  setPlayerScoreCount: (count: number) => void;
  playerOne?: PlayerStats;
  playerTwo?: PlayerStats;
}

const ScoreCounter: React.FC<Props> = ({
  playerScoreCount,
  setPlayerScoreCount,
  playerOne,
  playerTwo,
}) => {
  return (
    <Styled.CounterContainer>
      <button
        onClick={() => {
          if (playerScoreCount <= 0) return null;
          setPlayerScoreCount(playerScoreCount - 1);
        }}
      >
        -
      </button>
      <div>
        <p>{playerScoreCount}</p>
      </div>
      <button
        onClick={() => {
          if (playerOne && playerScoreCount >= playerOne.totalNeeded)
            return null;
          if (playerTwo && playerScoreCount >= playerTwo.totalNeeded)
            return null;
          setPlayerScoreCount(playerScoreCount + 1);
        }}
      >
        +
      </button>
    </Styled.CounterContainer>
  );
};

export default ScoreCounter;
