import * as React from "react";
import ScoreTracker from "./score-tracker";

export interface PlayerStats {
  skillLevel: number;
  pointsNeeded: number;
  defensiveShots: number;
  timeOuts: number;
  totalNeeded: number;
}

const ScoreTrackerContainer = () => {
  const [playerOne, setPlayerOne] = React.useState({} as PlayerStats);
  const [playerTwo, setPlayerTwo] = React.useState({} as PlayerStats);

  React.useEffect(() => {
    //   Since we don't have a db yet, we will pre populate fields
    setPlayerOne({
      skillLevel: 7,
      pointsNeeded: 55,
      defensiveShots: 0,
      timeOuts: 0,
      totalNeeded: 55,
    });
    setPlayerTwo({
      skillLevel: 5,
      pointsNeeded: 38,
      defensiveShots: 0,
      timeOuts: 0,
      totalNeeded: 38,
    });
  }, [setPlayerTwo, setPlayerOne]);
  return (
    <ScoreTracker
      playerOne={playerOne}
      playerTwo={playerTwo}
      setPlayerOne={setPlayerOne}
      setPlayerTwo={setPlayerTwo}
    />
  );
};

export default ScoreTrackerContainer;
