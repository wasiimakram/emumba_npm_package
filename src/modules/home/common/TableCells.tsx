import React from "react";
import { Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { formatTimeDifference } from "../../../common/utils/timeUtils";

type Props = {
  leftPackage: any;
  rightPackage: any;
};

const TableCells: React.FC<Props> = (props) => {
  const { leftPackage, rightPackage } = props;
  return (
    <div className="table-responsive">
      <table align="center" width="100%" className="table">
        <thead>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Package Name
            </th>
            <td scope="col" height="36" width="350" className="top-heading">
              {leftPackage.collected.metadata.name}{" "}
              <span>{leftPackage.collected.metadata.version}</span>
            </td>
            <td scope="col" height="36" width="350" className="top-heading">
              {rightPackage.collected.metadata.name}{" "}
              <span>{rightPackage.collected.metadata.version}</span>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Description
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.description}{" "}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.description}{" "}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Keywords
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.keywords &&
              leftPackage.collected.metadata.keywords.length > 0
                ? leftPackage.collected.metadata.keywords.toString()
                : "N/A"}{" "}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.keywords &&
              rightPackage.collected.metadata.keywords.length > 0
                ? rightPackage.collected.metadata.keywords.toString()
                : "N/A"}{" "}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Repository
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.links
                ? Object.entries(leftPackage.collected.metadata.links).map(
                    ([text, link]: [string, unknown]) => (
                      <a
                        key={text}
                        href={link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "20px" }}
                      >
                        {text}
                      </a>
                    ),
                  )
                : "N/A"}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.links
                ? Object.entries(rightPackage.collected.metadata.links).map(
                    ([text, link]: [string, unknown]) => (
                      <a
                        key={text}
                        href={link as string}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ marginRight: "20px" }}
                      >
                        {text}
                      </a>
                    ),
                  )
                : "N/A"}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              License
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.license}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.license}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Date
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {formatTimeDifference(leftPackage.collected.metadata.date)}
            </td>
            <td height="36" width="350" className="contentpara">
              {formatTimeDifference(rightPackage.collected.metadata.date)}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Authors
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.author
                ? leftPackage.collected.metadata.author.name
                : "N/A"}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.author
                ? rightPackage.collected.metadata.author.name
                : "N/A"}
            </td>
          </tr>
          <tr>
            <th scope="col" style={{ height: "36", width: "200px" }} className="left-heading">
              Maintainers
            </th>
            <td height="36" width="350" className="br-lr contentpara">
              {leftPackage.collected.metadata.maintainers
                ? leftPackage.collected.metadata.maintainers[0].email
                : "N/A"}
            </td>
            <td height="36" width="350" className="contentpara">
              {rightPackage.collected.metadata.maintainers
                ? rightPackage.collected.metadata.maintainers[0].email
                : "N/A"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default TableCells;
