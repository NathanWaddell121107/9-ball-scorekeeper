import * as React from "react";
import * as Styled from "./team-stats.styled";

const TeamStats = () => {
  const updatedDate = "7/3/2020";
  return (
    <Styled.TeamStatsWrapper>
      <h4>Team Stats</h4>
      <Styled.InnerWrapper>
        <p>Last updated: {updatedDate}</p>
        <Styled.StatInfo>
          <div>
            <p>Team Players: </p>
            <p>5</p>
          </div>
          <div>
            <p>Wins: </p>
            <p>15</p>
          </div>
          <div>
            <p>Losses: </p>
            <p>2</p>
          </div>
          <div>
            <p>Win %: </p>
            <p>88%</p>
          </div>
          <div>
            <p>Total Matches: </p>
            <p>17</p>
          </div>
        </Styled.StatInfo>
      </Styled.InnerWrapper>
    </Styled.TeamStatsWrapper>
  );
};

export default TeamStats;
