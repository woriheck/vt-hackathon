"use client";

import React from "react";
import { Layout, Space, Row, Col } from "antd";

const { Header, Footer, Sider, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#000",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#FFF",
};

export default function PlannerLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <Header style={headerStyle}>Travel Itinerary</Header>
      <Content style={{ backgroundColor: "#FFF" }}>
        <Row>
          <Col span={3}></Col>
          <Col span={18}>{children}</Col>
          <Col span={3}></Col>
        </Row>
      </Content>
      <Footer>© 2023 VELTRA Hackathon All Rights Reserved.</Footer>
    </Layout>
  );
}
