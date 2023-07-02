"use client";
import React, { useState } from "react";
import { Drawer, Avatar, Row, Col, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import styles from "../global.module.css";
import { SendOutlined } from "@/components/IconOutlined";

export default function Chat(props: any) {
  return (
    <Drawer title="AI Travel Agent" placement="right" onClose={props.onClose} open={props.open}>
      <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
        <Row>
          <Col span={3}>
            <Avatar
              shape="square"
              size={28}
              icon={<img src="./chatgpt.svg" className={styles.filterWhite} />}
              style={{ backgroundColor: "rgb(25, 195, 125)", padding: "3px" }}
            />
          </Col>
          <Col span={21}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit sint incidunt magnam facilis
          </Col>
        </Row>

        <Row style={{ marginTop: "12px" }}>
          <Col span={3}>
            <Avatar shape="square" size={28} icon={<UserOutlined />} />
          </Col>
          <Col span={21}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit sint incidunt magnam facilis
          </Col>
        </Row>

        <Row style={{ marginTop: "12px" }}>
          <Col span={3}>
            <Avatar
              shape="square"
              size={28}
              icon={<img src="./chatgpt.svg" className={styles.filterWhite} />}
              style={{ backgroundColor: "rgb(25, 195, 125)", padding: "3px" }}
            />
          </Col>
          <Col span={21}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis impedit sint incidunt magnam facilis
          </Col>
        </Row>

        <Row style={{ marginTop: "auto" }}>
          <Col span={24}>
            <Input size="large" placeholder="Send a message" suffix={<SendOutlined color="#777" />} />
          </Col>
        </Row>
      </div>
    </Drawer>
  );
}
