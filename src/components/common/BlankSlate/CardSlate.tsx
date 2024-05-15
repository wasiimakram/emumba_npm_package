import "./card.scss";

import React from "react";
import { Card, Col, Skeleton } from "antd";

type Props = {};
function CardSlate(props: Props) {
  return (
    <Col className="home-col-box" xs={24} sm={12} md={8} lg={8}>
      <Card className="single-card">
        <Skeleton
          loading
          // avatar
          active
          paragraph={{ rows: 7 }}
        />
      </Card>
    </Col>
  );
}

export default CardSlate;
