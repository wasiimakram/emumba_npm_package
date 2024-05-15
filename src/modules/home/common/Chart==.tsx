import React, { useEffect, useState } from "react";
import { Line } from "@ant-design/plots";
import { Typography } from "antd";

type Props = {
  leftPackage: any;
  rightPackage: any;
};
const Chart: React.FC<Props> = (props) => {
  const { leftPackage, rightPackage } = props;
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch("https://gw.alipayobjects.com/os/bmw-prod/55424a73-7cb8-4f79-b60d-3ab627ac5698.json")
      .then((response) => response.json())
      .then((json) => {
        // Filter the data to include only "Solid fuel" and "Gas fuel"
        const filteredData = json.filter(
          (item: any) => item.category === "Solid fuel" || item.category === "Gas fuel",
        );
        setData(filteredData);
      })
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };
  const COLOR_PLATE_10 = ["#5B8FF9", "#5AD8A6"];
  const config = {
    data,
    xField: "year", // api key
    yField: "value", // api key
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
          r: Number(year) % 4 ? 0 : 3, // 4 个
        };
      },
    },
  };

  return (
    <>
      <Typography.Title level={4}>Downloads</Typography.Title>
      <Line {...config} />
    </>
  );
};
export default Chart;
