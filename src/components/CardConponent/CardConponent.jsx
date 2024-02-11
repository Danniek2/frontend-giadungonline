import React from 'react';
import { DiscountProduct, PriceProduct, ReportProduct, StyleNameProduct, WrapperCard } from './style';
import { StarFilled } from '@ant-design/icons';

const CardConponent = () => {
  return (
    <WrapperCard
      hoverable
      style={{
        width: 200,
        
      }}
      // bodyStyle={{padding: '10px'}}
      cover={
        <img
          alt="example"
          src="https://s.meta.com.vn/img/thumb.ashx/300x300x95/Data/image/2022/01/04/quat-chan-gio-hokito-plus-fm-3510s-l-y-300.jpg"
        />
      }
    >
      <StyleNameProduct>Quạt chắn gió Hokito Plus FM-3510S-L/Y</StyleNameProduct>
      <ReportProduct>
        <span>4.5</span><StarFilled style={{fontSize: '11px', color: 'yellow'}}/>
        <span> | Đã bán 100+</span>
      </ReportProduct>
      <PriceProduct>
        <span>4.090.000 đ</span> 
        <DiscountProduct>(-5%)</DiscountProduct>
      </PriceProduct>
    </WrapperCard>
  );
}

export default CardConponent