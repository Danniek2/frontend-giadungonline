import React from 'react'
import SliderConponent from '../../components/SliderConponent/SliderConponent'
import slider_1 from '../../images/slider_1.jpg'
import slider_2 from '../../images/slider_2.jpg'
import slider_3 from '../../images/slider_3.jpg'
import slider_4 from '../../images/slider_4.jpg'
import CardConponent from '../../components/CardConponent/CardConponent'
import NavbarConponent from '../../components/NavbarConponent/NavbarConponent'
import { Button } from 'antd'



const Homepage = () => {
  return (
    <>
      <div
        id="container"
        style={{ backgroundColor: "#f0f0f0", padding: "0 80px" }}
      >
        <SliderConponent arrImages={[slider_1, slider_2, slider_3, slider_4]} />
      </div>
      
      <div style={{ padding: "20px 120px"}}>
        <div style={{ fontSize: "20px", paddingBottom: "20px" }}>
          <span>
            <strong>Sản Phẩm Mới</strong>
          </span>
        </div>  

        <div style={{display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />
          <CardConponent />       
        </div>  
        <div style={{display: 'flex', marginTop: '10px', justifyContent: 'center'}}><Button>Xem Thêm</Button></div>   
          
      </div>

      <NavbarConponent />

    </>
  );
}

export default Homepage