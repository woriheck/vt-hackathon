import { EditOutlined } from "@ant-design/icons";
import { Card, Typography, Steps, Button, Row, Col } from "antd";
import React, { useState } from "react";
import {
  PlannerOutlined,
  RefreshOutlined,
  SmartToyOutlined,
  StarsOutlined,
  VerifiedOutlined,
  GradeOutlined,
  CloudDownloadOutlined,
} from "../../components/IconOutlined";
import Chat from "./chat";
const { Text, Title } = Typography;
const { Meta } = Card;
const description = "This is a description.";

export default function PlannerContent() {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showChat = () => {
    setOpen(true);
  };

  const closeChat = () => {
    setOpen(false);
  };

  return (
    <>
      <Chat open={open} onClose={closeChat} />

      <Steps
        direction="vertical"
        current={3}
        progressDot
        items={[
          {
            title: (
              <span>
                <Title level={4}>
                  Morning
                  <span style={{ marginLeft: "8px", fontSize: "12px" }}>
                    09:00am ~ 12:00am &nbsp;
                    <EditOutlined />
                  </span>
                </Title>
              </span>
            ),
            description: (
              <>
                <Button size="small" type="link" style={{ paddingLeft: "0px", marginTop: "auto" }}>
                  <PlannerOutlined color="#1677ff" />
                  <span style={{ verticalAlign: "middle" }}>&nbsp; Plan my own schedule</span>
                </Button>
                <Button size="small" type="link">
                  <SmartToyOutlined color="#1677ff" />
                  <span style={{ verticalAlign: "middle" }} onClick={showChat}>
                    &nbsp; AI Travel Agent
                  </span>
                </Button>

                <Row style={{ marginTop: "16px" }}>
                  {new Array(3).fill(null).map((_, i) => {
                    return (
                      <>
                        <Col key={`card-content-${i}`} style={{ marginLeft: "12px" }}>
                          <Card
                            hoverable
                            style={{ width: 280 }}
                            cover={
                              <img
                                alt="example"
                                src="https://cdn2.veltra.com/ptr/20170915043907_505432025_13518_0.jpg?imwidth=800&impolicy=custom"
                              />
                            }
                            actions={[
                              <div key="primary" style={{ width: "100%", padding: "0px 10px" }}>
                                <Button style={{ backgroundColor: "#5E92CE", color: "white", border: "none" }} block>
                                  Renew
                                </Button>
                              </div>,
                              <div key="primary" style={{ width: "100%", padding: "0px 10px" }}>
                                <Button style={{ backgroundColor: "#5E92CE", color: "white", border: "none" }} block>
                                  予約手続きへ
                                </Button>
                              </div>,
                            ]}
                          >
                            <Meta
                              title="江戸の風流！屋形船で回る夜景観賞ツア"
                              description="
                      江戸の粋を感じる120分の夜景観賞！屋形船「深川 冨士見」でお台場沖を周遊します。"
                            />
                          </Card>
                        </Col>
                      </>
                    );
                  })}
                </Row>
              </>
            ),
          },
          {
            title: (
              <span>
                <Title level={4}>
                  Afternoon
                  <span style={{ marginLeft: "8px", fontSize: "12px" }}>
                    12:00pm ~ 6:00pm &nbsp;
                    <EditOutlined />
                  </span>
                </Title>
              </span>
            ),
            description: (
              <div>
                <Row>
                  <Col>
                    <Button size="small" type="link" style={{ paddingLeft: "0px", marginTop: "auto" }}>
                      <PlannerOutlined color="#1677ff" fontSize="16px" />
                      <span style={{ verticalAlign: "middle" }}>&nbsp; Plan my own schedule</span>
                    </Button>
                    <Button size="small" type="link">
                      <SmartToyOutlined color="#1677ff" />
                      <span style={{ verticalAlign: "middle" }}>&nbsp; AI Travel Agent</span>
                    </Button>
                  </Col>
                </Row>

                <Row style={{ marginTop: "16px" }}>
                  <Col>
                    <img
                      style={{ borderRadius: "5px" }}
                      alt="example"
                      src="https://cdn2.veltra.com/ptr/20170915043938_804798124_13518_0.jpg?imwidth=280&impolicy=custom"
                    />
                  </Col>

                  <Col style={{ paddingLeft: "10px" }}>
                    <img
                      style={{ borderRadius: "5px" }}
                      alt="example"
                      src="https://cdn2.veltra.com/ptr/20220512005303_380011309_13518_0.jpg?imwidth=280&impolicy=custom"
                    />
                  </Col>
                  <Col style={{ paddingLeft: "10px" }}>
                    <img
                      style={{ borderRadius: "5px" }}
                      alt="example"
                      src="https://cdn2.veltra.com/ptr/20220512005303_725689360_13518_0.jpg?imwidth=280&impolicy=custom"
                    />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <Title level={4} style={{ marginBottom: "5px" }}>
                      江戸の風流！屋形船で回る夜景観賞ツアー＜夕食付／東京駅発＞by はとバス
                    </Title>
                    <div style={{ verticalAlign: "middle", marginBottom: "5px" }}>
                      {" "}
                      <GradeOutlined color="#E4336B" />
                      <GradeOutlined color="#E4336B" />
                      <GradeOutlined color="#E4336B" />
                      <GradeOutlined color="#E4336B" />
                      <GradeOutlined color="#CCC" />
                      <Title
                        level={5}
                        style={{ color: "#E4336B", display: "inline", marginLeft: "5px", verticalAlign: "middle" }}
                      >
                        4.33
                      </Title>{" "}
                      <span style={{ verticalAlign: "middle" }}>(129)</span>
                    </div>
                    <Text style={{ display: "flex", alignItems: "center" }}>
                      Provider:&nbsp;<a href="https://www.veltra.com">veltra</a>&nbsp;
                      <VerifiedOutlined color="#5F92CE" />
                      &nbsp;|&nbsp;
                      <a href="">
                        Voucher&nbsp;
                        <CloudDownloadOutlined color="#1677ff" />
                      </a>
                    </Text>
                    <br />
                    <Text>
                      江戸の粋を感じる120分の夜景観賞！屋形船「深川冨士見」でお台場沖を周遊します。 <br />
                      お刺身やお酒を味わいながら、東京スカイツリーやお台場、佃島の景色をご覧ください。
                      <br />
                      屋形船自身も夜景の一部となり、夜の東京を彩ります。佃煮のお土産もどうぞ。
                    </Text>
                    <Title level={5}>ハイライト</Title>
                    <ul style={{ listStyleType: "none", paddingLeft: "16px", color: "#000" }}>
                      <li>
                        <StarsOutlined color="#E4336B" />
                        <span style={{ verticalAlign: "middle" }}>&nbsp; 屋形船「深川 冨士見」で江戸の粋を味わう</span>
                      </li>
                      <li>
                        <StarsOutlined color="#E4336B" />
                        <span style={{ verticalAlign: "middle" }}>
                          &nbsp; 東京の美しい夜景と旬の食材を使用した和食を堪能！
                        </span>
                      </li>
                      <li>
                        <StarsOutlined color="#E4336B" />
                        <span style={{ verticalAlign: "middle" }}>
                          &nbsp; 下船時には、お持ち帰り用の佃煮をお配りいたします
                        </span>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            ),
          },
          {
            title: "Night",
            description,
          },
        ]}
      />
    </>
  );
}
