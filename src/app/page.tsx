"use client";

import React from "react";
import styles from "./global.module.css";
import { Layout, Space, Row, Col, Typography } from "antd";
import TravelInput from "../components/TravelInput";

const { Content } = Layout;
const { Title, Text } = Typography;

export default function landing() {
  return (
    <main>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Layout
          style={{
            minHeight: "100vh",
          }}
        >
          <Content
            style={{
              position: "absolute",
              minHeight: "100vh",
              width: "100vw",
              backgroundImage: "url(./landing-bg-2.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "100% 100%",
              filter: "brightness(70%)",
            }}
          ></Content>
          <Content className={styles.verticalCenter}>
            <Row className={styles.verticalCenter}>
              <Col span={6}></Col>
              <Col flex={14}>
                <Row className={styles.verticalCenter} style={{ marginBottom: "16px" }}>
                  <Col>
                    <Title style={{ display: "inline", marginRight: "10px", color: "white" }}>Travel Itinerary</Title>
                    <Text style={{ color: "#E5E4E2", fontSize: "12px" }} italic>
                      Powered by ChatGPT AI
                    </Text>
                  </Col>
                </Row>
                <TravelInput />
              </Col>
              <Col span={6}></Col>
            </Row>
          </Content>
        </Layout>
      </Space>
    </main>
  );
}
