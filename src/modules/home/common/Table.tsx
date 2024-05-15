import React from "react";
import { Layout, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import TableCells from "./TableCells";

const { Content } = Layout;

type Props = {
  leftPackage: string[];
  rightPackage: string[];
};

const TableComponent: React.FC<Props> = (props) => {
  const { leftPackage, rightPackage } = props;
  return (
    <Content className="ant-container">
      <TableCells leftPackage={leftPackage} rightPackage={rightPackage} />
    </Content>
  );
};

export default TableComponent;
