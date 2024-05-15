import React, { useEffect, useState } from "react";
import { Layout, Typography } from "antd";
import Search from "./common/Search";

import "./home.scss";
import Stats from "./common/Stats";
import TableComponent from "./common/Table";
import Chart from "./common/Chart";
import { QueryClient } from "@tanstack/react-query";
import { useCompare } from "../../data/home/useHome";

const { Title } = Typography;
const { Content } = Layout;

const Home: React.FC = () => {
  const queryClient = new QueryClient();
  const [values, setValues] = useState<string[]>([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const { leftPackage, rightPackage } = useCompare(values[0], values[1]);
  return (
    <Layout className="home-main-wrap">
      <Content className="ant-container">
        <Title level={4} className="main-title">
          Compare NPM Packages
        </Title>
        <Search values={values} onValues={setValues} onSubmit={setIsSubmit} />
        {leftPackage && rightPackage && isSubmit && (
          <>
            <TableComponent leftPackage={leftPackage} rightPackage={rightPackage} />
            <Chart leftPackage={leftPackage} rightPackage={rightPackage} />
            <Stats leftPackage={leftPackage} rightPackage={rightPackage} />
          </>
        )}
      </Content>
    </Layout>
  );
};
export default Home;
