import React, { useEffect, useState } from "react";
import { QueryClient } from "@tanstack/react-query";
import { Button, Select, message, Layout } from "antd";
import type { SizeType } from "antd/es/config-provider/SizeContext";
// import type { SelectProps, RadioChangeEvent } from "antd";
import axios from "axios";
import { useCompare, useHome } from "../../../data/home/useHome";

const { Content } = Layout;

type Props = {
  onValues: (values: string[]) => void;
  values: string[];
  onSubmit: (isSubmit: boolean) => void;
};

const Search: React.FC<Props> = (props) => {
  const message2 = "";
  const { onValues, values, onSubmit } = props;
  const queryClient = new QueryClient();
  const isDisabled = values.length !== 2;
  const [text, setText] = useState("");
  const [leftPkg, setleftPkg] = useState("");
  const [rightPkg, setrightPkg] = useState("");

  const { data: options } = useHome(text);

  const onChange = (value: string[]) => {
    if (value.length > 2) {
      message.warning("You can not select more than 2 values");
    } else {
      onValues(value);
      value.length === 0 && onSubmit(false);
    }
  };
  const onSearch = (value: string) => {
    setText(value);
  };

  const onBtnSubmit = () => {
    setleftPkg(values[0]);
    setrightPkg(values[1]);
    onSubmit(true);
  };

  return (
    <Content className="search-wrap">
      <Select
        value={values}
        mode="multiple"
        placeholder="Please select"
        onSearch={onSearch}
        onChange={onChange}
        options={options}
        style={{ width: "80%" }}
        maxTagCount={2}
      />
      <Button disabled={isDisabled} onClick={onBtnSubmit} type="primary">
        Compare
      </Button>
    </Content>
  );
};
export default Search;
