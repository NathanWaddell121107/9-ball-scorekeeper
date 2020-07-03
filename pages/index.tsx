import * as React from "react";
import Header from "../client/components/landing page/header";
import Layout from "../client/components/layout/layout";
import Dashboard from "../client/components/landing page/dashboard";

const Index = () => {
  return (
    <Layout>
      <Header />
      <Dashboard />
    </Layout>
  );
};

export default Index;
