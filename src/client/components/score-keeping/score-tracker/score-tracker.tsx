import * as React from "react";
import * as Styled from "./score-tracker.styled";
import ScoreCounter from "../score-counter";
import { PlayerStats } from "./score-tracker-container";

interface Props {
  playerOne: PlayerStats;
  playerTwo: PlayerStats;
  setPlayerOne: (stats: PlayerStats) => void;
  setPlayerTwo: (stats: PlayerStats) => void;
}

const ScoreTracker: React.FC<Props> = ({
  playerOne,
  playerTwo,
  setPlayerOne,
  setPlayerTwo,
}) => {
  return (
    <Styled.TrackerWrapper>
      <Styled.InnerWrapper>
        <Styled.PlayerTracker>
          Player one
          <p>Skill Level: {playerOne.skillLevel}</p>
          <p>Points Needed: {playerOne.pointsNeeded}</p>
          <ScoreCounter setPlayerOne={setPlayerOne} playerOne={playerOne} />
        </Styled.PlayerTracker>
        <Styled.PlayerTracker>
          Player two
          <p>Skill Level: {playerTwo.skillLevel}</p>
          <p>Points Needed: {playerTwo.pointsNeeded}</p>
          <ScoreCounter setPlayerTwo={setPlayerTwo} playerTwo={playerTwo} />
        </Styled.PlayerTracker>
      </Styled.InnerWrapper>
    </Styled.TrackerWrapper>
  );
};

export default ScoreTracker;
