"use client";

import React, { useState } from "react";
import { DatePicker, Row, Col, Input, Tag } from "antd";
import type { RangePickerProps } from "antd/es/date-picker";
import { SelectOutlined } from "@ant-design/icons";
const { RangePicker } = DatePicker;
import dayjs from "dayjs";

const { Search } = Input;
const { CheckableTag } = Tag;

const onSearch = (value: string) => console.log(value);
// eslint-disable-next-line arrow-body-style
const disabledDate: RangePickerProps["disabledDate"] = (current) => {
  // Can not select days before today and today
  return current && current < dayjs().endOf("day");
};

export default function TravelDate() {
  const tagsData = ["Adventure", "Sightseeing", "World Heritage", "Local Food"];
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter((t) => t !== tag);
    console.log("You are interested in: ", nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };
  return (
    <>
      <Row>
        <Col flex={2}>
          <RangePicker disabledDate={disabledDate} style={{ width: "90%" }} size="large" />
        </Col>
        <Col flex={4}>
          <Search placeholder="Where to" size="large" style={{ width: "100%" }} onSearch={onSearch} enterButton />
        </Col>
      </Row>
      <Row style={{ marginTop: "15px", display: "flex", justifyContent: "end" }}>
        <Col>
          {tagsData.map((tag, index) => {
            const tagStyle: { marginRight?: string; border?: string; color?: string } =
              tagsData.length - 1 == index ? { marginRight: "0px", color: "white" } : { color: "white" };

            if (selectedTags.includes(tag)) {
              delete tagStyle.border;
            }
            return (
              <CheckableTag
                key={tag}
                style={tagStyle}
                checked={selectedTags.includes(tag)}
                onChange={(checked) => handleChange(tag, checked)}
              >
                {tag}
                {selectedTags.includes(tag) ? null : (
                  <>
                    &nbsp;
                    <SelectOutlined style={{ fontSize: "10px" }} />
                  </>
                )}
              </CheckableTag>
            );
          })}
        </Col>
      </Row>
    </>
  );
}
