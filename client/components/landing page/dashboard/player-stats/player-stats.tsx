import * as React from "react";
import * as Styled from "./player-stats.styled";

const PlayerStats = () => {
  const updatedDate = "7/3/2020";
  return (
    <Styled.PlayerStatsWrapper>
      <h4>Player Stats</h4>
      <Styled.InnerWrapper>
        <p>Last updated: {updatedDate}</p>
        <Styled.StatInfo>
          <div>
            <p>Skill Level: </p>
            <p>7</p>
          </div>
          <div>
            <p>Wins: </p>
            <p>10</p>
          </div>
          <div>
            <p>Losses: </p>
            <p>1</p>
          </div>
          <div>
            <p>Win %: </p>
            <p>91%</p>
          </div>
          <div>
            <p>Total Matches: </p>
            <p>11</p>
          </div>
        </Styled.StatInfo>
      </Styled.InnerWrapper>
    </Styled.PlayerStatsWrapper>
  );
};

export default PlayerStats;
