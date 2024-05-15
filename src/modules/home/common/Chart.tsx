import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { Layout, Typography } from "antd";

const { Content } = Layout;

type Props = {
  leftPackage: any;
  rightPackage: any;
};

const Chart: React.FC<Props> = (props) => {
  const { leftPackage, rightPackage } = props;
  const [data, setData] = useState<any[]>([]);

  // const mergeAndSortData = (leftPackage: any, rightPackage: any) => {
  //   const leftDown = leftPackage.collected.npm.downloads;
  //   const rightDown = rightPackage.collected.npm.downloads;
  //   const mergedData = [...leftDown, ...rightDown];
  //   return mergedData;
  // };
  const formatData = (data: any, packageName: string) => {
    const dataMap = new Map();
    data.forEach((item: any) => {
      const date = new Date(item.from).toLocaleDateString();
      dataMap.set(date, {
        year: date,
        value: item.count,
        category: packageName,
      });
    });

    return Array.from(dataMap.values());
  };

  useEffect(() => {
    // const mergedData = mergeAndSortData(leftPackage, rightPackage);
    const forLeft = formatData(
      leftPackage.collected.npm.downloads,
      leftPackage.collected.metadata.name,
    );
    const forRight = formatData(
      rightPackage.collected.npm.downloads,
      rightPackage.collected.metadata.name,
    );
    const combinedData = [...forLeft, ...forRight];
    setData(combinedData);
    console.log("MERGED", forLeft, forRight, combinedData);
  }, [leftPackage, rightPackage]);

  const COLOR_PLATE_10 = ["#5B8FF9", "#5AD8A6"];
  const config = {
    data,
    xField: "year",
    yField: "value",
    seriesField: "category",
    yAxis: {
      label: {
        formatter: (v: any) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
      },
    },
    color: COLOR_PLATE_10,
    point: {
      style: ({ year }: any) => {
        return {
          r: Number(year) % 4 ? 0 : 3,
        };
      },
    },
  };
  return (
    <Content className="ant-container">
      <Typography.Title level={4}>Downloads</Typography.Title>
      <Line {...config} />
    </Content>
  );
};
export default Chart;
