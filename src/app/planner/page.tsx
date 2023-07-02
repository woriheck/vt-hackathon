"use client";
import { Tabs } from "antd";
import PlannerContent from "./PlannerContent";
import { Row, Col } from "antd";

export default function planner() {
  return (
    <>
      <Tabs
        defaultActiveKey="1"
        centered
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: (
              <Row>
                <Col style={{ textAlign: "center" }}>
                  <span style={{ fontSize: "20px" }}>Day {id}</span>
                  <br />
                  <span style={{ fontSize: "10px" }}>July 0{id}</span>
                </Col>
              </Row>
            ),
            key: id,
            children: <PlannerContent key={`planner-${i}`} />,
          };
        })}
      />
    </>
  );
}
