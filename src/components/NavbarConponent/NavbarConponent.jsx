import React from 'react'
import { WrapperContent, WrapperLable, WrapperList, WrapperPrice } from './style'
import { Checkbox, Rate } from 'antd';


const NavbarConponent = () => {
  const onChange = () => {};
  const renderContent = (type, options) => {
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperList>{option}</WrapperList>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return <Checkbox value={option.value}>{option.label}</Checkbox>;
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          console.log("check", option);
          return (
            <div style={{ display: "flex", gap: "5px", fontweight: "300" }}>
              <Rate
                style={{ fontSize: "12px" }}
                disabled
                defaultValue={option}
              />
              <span>{`Từ ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return (
            <WrapperPrice>
              <span>{option}</span>
            </WrapperPrice>
          );
        });
      default:
        return {};
    }
  };
  return (
    <div>
      <WrapperLable>Lable</WrapperLable>
      <WrapperContent>
        {renderContent("text", [
          "Quạt",
          "Máy lọc nước",
          "Máy hút bụi",
          "Lò vi sóng",
          "Nồi cơm điện",
          "Máy sấy tóc",
        ])}
      </WrapperContent>
      {/* <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
        ])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("star", ["2", "3", "4", "5"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("price", [
          "Dưới 500.000đ",
          "Từ 500.000đ - 2.000.000đ",
          "Từ 2.000.000đ - 5.000.000đ",
          "Trên 5.000.000đ",
        ])}
      </WrapperContent> */}
    </div>
  );
};

export default NavbarConponent