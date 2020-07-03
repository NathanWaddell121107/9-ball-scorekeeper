import * as React from "react";
import * as Styled from "./dashboard.styled";
import PlayerStats from "./player-stats";
import TeamStats from "./team-stats";

const Dashboard = () => {
  // this will be populated with the users data
  const playerName = "Nathan";
  return (
    <Styled.DashboardWrapper>
      <a href='#'>Start new match</a>
      <h2>{playerName}'s Dashboard</h2>
      <Styled.StatsContainer>
        <PlayerStats />
        <TeamStats />
      </Styled.StatsContainer>
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
