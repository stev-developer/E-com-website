import React from "react";
import Sidebar from "./Sidebar";
import AppHeader from "./AppHeader";
import OverView from "./Overview";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

const MainWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
`;

const SidebarWrapper = styled.div`
  width: 250px; /* Adjust the width as needed */
`;

const ContentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Dashboard = () => {
  return (
    <Layout>
      <AppHeader />
      <MainWrapper>
        <SidebarWrapper>
          <Sidebar />
        </SidebarWrapper>
        <ContentWrapper>
          <OverView />
        </ContentWrapper>
      </MainWrapper>
    </Layout>
  );
};

export default Dashboard;
