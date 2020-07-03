import * as React from "react";
import Layout from "../client/components/layout/layout";
import Header from "../client/components/landing page/header";
import ScoreTracker from "../client/components/score-keeping/score-tracker";

const ScoreKeepingPage = () => {
  return (
    <Layout>
      <Header />
      <ScoreTracker />
    </Layout>
  );
};

export default ScoreKeepingPage;
