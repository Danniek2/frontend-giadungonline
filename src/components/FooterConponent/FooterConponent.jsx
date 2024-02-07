
import React from 'react'
import { WrapperFooter, WrapperFooterFinish, WrapperFooterFisrt } from './style';
import { Col } from 'antd';
// import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';
import { FacebookOutlined, GithubOutlined, InstagramOutlined, TikTokOutlined, TwitterOutlined } from '@ant-design/icons';

const FooterConponent = () => {
  return (
    <div>
      <WrapperFooterFisrt>
        <span>GiaDungStore - KÊNH MUA SẮM TRỰC TUYẾN UY TÍN GIÁ TỐT HÀNG ĐẦU VIỆT NAM</span>
      </WrapperFooterFisrt>
    <WrapperFooter>
      <Col span={6}>
        <div>
          <span>
            <strong>Thông tin cửa hàng</strong>
          </span>
        </div>
        <div>
          <span>Giới thiệu cửa hàng</span>
        </div>
        <div>
          <span>Quy chế hoạt động</span>
        </div>
        <div>
          <span>Hệ thống cửa hàng</span>
        </div>
        <div>
          <span>Tuyển dụng</span>
        </div>
        <div>
          <span>Liên hệ</span>
        </div>
      </Col>

      <Col span={6}>
        <div>
          <span>
            <strong>Chính sách</strong>
          </span>
        </div>
        <div>
          <span>Ưu đãi</span>
        </div>
        <div>
          <span>Điều kiện giao dịch</span>
        </div>
        <div>
          <span>Bảo vệ thông tin người dùng</span>
        </div>
        <div>
          <span>Bảo mật giao dịch của khách hàng</span>
        </div>
        <div>
          <span>Chính sách bảo hành</span>
        </div>
        <div>
          <span>Chính sách và quy định thanh toán</span>
        </div>
        <div>
          <span>Chính sách 30 ngày đổi mới</span>
        </div>
      </Col>
      <Col span={6}>
        <div>
          <span>
            <strong>Hỗ trợ khách hàng</strong>
          </span>
        </div>
        <div>
          <span>Hướng dẫn mua hàng</span>
        </div>
        <div>
          <span>Câu hỏi thường gặp</span>
        </div>
        <div>
          <span>Vận chuyển và giao nhận</span>
        </div>
        <div>
          <span>Phương thức thanh toán</span>
        </div>
        <div>
          <span>Bảng giá dịch vụ lắp đặt</span>
        </div>
      </Col>
      <Col span={6}>
        <div>
          <span>
            <strong>Thông tin khác</strong>
          </span>
        </div>
        <div>
          <span>Tổng đài hỗ trợ miễn phí</span>
        </div>
        <div>
          <span>Email: dannie022023@gmail.com</span>
        </div>
        <div>
          <span>SĐT: 0987654321</span>
        </div>

        <div>
          <span>Liên hệ khác:</span>
        </div>

        <div style={{gap: "10px"}}>
          <FacebookOutlined />
          <GithubOutlined />
          <TikTokOutlined />
          <TwitterOutlined />
          <InstagramOutlined />
        </div>
      </Col>
    </WrapperFooter>
    <WrapperFooterFinish>
      <div><span>Copyright © 2023 - 2024 Công ty Cổ phần Gia Dụng Việt Nam .</span></div>
      <div><span>Giấy chứng nhận đăng ký kinh doanh số 098712354, cấp ngày 07/02/2024 bởi Sở Kế hoạch và Đầu tư TP. Hồ Chí Minh.</span></div>
      <div><span>Địa chỉ đăng ký trụ sở chính: 296 Đông Hòa, Dĩ An, Bình Dương</span></div>
    </WrapperFooterFinish>
    </div>
  );
}

export default FooterConponent