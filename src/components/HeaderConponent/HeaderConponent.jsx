import React from 'react'
import { Col } from 'antd';
import { WrapperAccoutHeader, WrapperHeader, WrapperNavbar, WrapperTextHeader } from './style';
import Search from 'antd/es/input/Search';
import {
  CaretDownOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const HeaderConponent = () => {
  return (
    <div>
      <WrapperHeader>
        <Col span={1}>
          <img src="logogiadung.png" alt="logo" width={40} height={40} />
        </Col>

        <Col span={5}>
          <WrapperTextHeader>
            <div>
              <span>GiaDungStore</span>
            </div>
          </WrapperTextHeader>
        </Col>

        <Col span={12}>
          <Search
            placeholder="Tìm kiếm"
            //onSearch={onSearch}
            enterButton
          />
        </Col>

        <Col span={6} style={{ display: "flex", gap: "30px"}}>
          <WrapperAccoutHeader>
            <UserOutlined style={{ fontSize: "25px" }} />
            <div>
              <span style={{ fontSize: "13px" }}><Link to={"/login"}>Đăng Nhập/Đăng Ký</Link></span>
              <div>
                <span style={{ fontSize: "13px" }}>Tài Khoản</span>
                <CaretDownOutlined />
              </div>
            </div>
          </WrapperAccoutHeader>
          <div style={{ fontSize: "25px" }}>
            <ShoppingCartOutlined />
            <span style={{ fontSize: "13px" }}>Giỏ Hàng</span>
          </div>
        </Col>
      </WrapperHeader>

      <WrapperNavbar>
        <Col span={6}><Link to={"/"}>Trang Chủ</Link></Col>
        <Col span={6}>Sản Phẩm</Col>
        <Col span={6}>Đồ Gia Dụng Phòng</Col>
        <Col span={6}>Giới Thiệu</Col>
      </WrapperNavbar>
    </div>
  );
}

export default HeaderConponent