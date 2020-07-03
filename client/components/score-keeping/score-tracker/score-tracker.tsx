import * as React from "react";
import * as Styled from "./score-tracker.styled";

interface PlayerStats {
  skillLevel: number;
  pointsNeeded: number;
  defensiveShots: number;
  timeOuts: number;
}

const ScoreTracker = () => {
  const [playerOne, setPlayerOne] = React.useState({} as PlayerStats);
  const [playerTwo, setPlayerTwo] = React.useState({} as PlayerStats);

  React.useEffect(() => {
    //   Since we don't have a db yet, we will pre populate fields
    setPlayerOne({
      skillLevel: 7,
      pointsNeeded: 55,
      defensiveShots: 0,
      timeOuts: 0,
    });
    setPlayerTwo({
      skillLevel: 5,
      pointsNeeded: 38,
      defensiveShots: 0,
      timeOuts: 0,
    });
  });
  return (
    <Styled.TrackerWrapper>
      <Styled.InnerWrapper>
        <Styled.PlayerTracker>
          Player one
          <p>Skill Level: {playerOne.skillLevel}</p>
          <p>Points Needed: {playerOne.pointsNeeded}</p>
        </Styled.PlayerTracker>
        <Styled.PlayerTracker>
          Player two
          <p>Skill Level: {playerTwo.skillLevel}</p>
          <p>Points Needed: {playerTwo.pointsNeeded}</p>
        </Styled.PlayerTracker>
      </Styled.InnerWrapper>
    </Styled.TrackerWrapper>
  );
};

export default ScoreTracker;
