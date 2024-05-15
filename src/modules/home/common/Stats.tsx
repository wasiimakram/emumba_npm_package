import React, { useEffect, useState } from "react";
import { Col, Layout, Row, Tag, Typography } from "antd";
import { calculateWeightedScore } from "../../../common/utils/constants";

const { Content } = Layout;
const { Title, Text } = Typography;
type Props = {
  leftPackage: any;
  rightPackage: any;
};
const Stats: React.FC<Props> = (props) => {
  const { leftPackage, rightPackage } = props;
  const leftW = calculateWeightedScore(leftPackage);
  const rightW = calculateWeightedScore(rightPackage);
  let data: any = {};
  if (leftW > rightW) {
    data = leftPackage;
  } else if (leftW < rightW) {
    data = rightPackage;
  } else {
    data = leftPackage;
  }
  const betterness = leftW / rightW;
  const health = data && data?.evaluation?.quality?.health * 100;

  return (
    <Content className="ant-container stats-wrap">
      <Content className="title">
        {`${data.collected.metadata.name} is ${betterness.toFixed(2)} times better`}
      </Content>
      <Content className="main-content">
        <Row>
          <Col xs={24} sm={12} md={10} lg={12} className="description">
            <Title level={4}>Recommended: </Title>
            <Text className="short-text">{data.collected.metadata.name} </Text>
            <br />
            <Text>{data.collected.metadata.description} </Text>
            <Text>
              <br />
              Visit this link for more information{" "}
              <a
                href={data.collected.metadata.repository.url.replace(/^git\+/, "")}
                target="_blank"
                rel="noreferrer"
              >
                HomePage
              </a>
            </Text>
          </Col>
          <Col xs={21} sm={4} md={4} lg={3} className="downloads main-col">
            <Title level={5}>Downloads</Title>
            <Text>
              {data.evaluation.popularity.downloadsCount &&
                data.evaluation.popularity.downloadsCount.toFixed(2)}
              +
            </Text>
          </Col>
          <Col xs={21} sm={4} md={4} lg={3} className="stars main-col">
            <Title level={5}>Stars</Title>
            <Text>{data.collected.github && data.collected.github.starsCount}+</Text>
          </Col>
          <Col xs={21} sm={4} md={4} lg={3} className="health main-col">
            <Title level={5}>Health</Title>
            <Text>{health.toFixed(2)}%</Text>
          </Col>
        </Row>
        <Content className="footer-content">
          <Title level={5}>Languages</Title>
          <Content className="tags">
            {data.collected.metadata.keywords
              ? data.collected.metadata.keywords.map((item: string) => <Tag>{item}</Tag>)
              : ""}{" "}
          </Content>
        </Content>
      </Content>
    </Content>
  );
};
export default Stats;
