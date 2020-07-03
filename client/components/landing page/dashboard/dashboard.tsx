import * as React from "react";
import * as Styled from "./dashboard.styled";
import PlayerStats from "./player-stats";
import TeamStats from "./team-stats";

const Dashboard = () => {
  return (
    <Styled.DashboardWrapper>
      Dashboard
      <PlayerStats />
      <TeamStats />
    </Styled.DashboardWrapper>
  );
};

export default Dashboard;
