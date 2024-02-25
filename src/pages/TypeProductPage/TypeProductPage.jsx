import React from 'react'
import NavbarConponent from '../../components/NavbarConponent/NavbarConponent'
import CardConponent from '../../components/CardConponent/CardConponent'
import { Col, Row } from 'antd'

const TypeProductPage = () => {
  return (
    <Row style={{padding: '10px 80px', background: '#fff', flexWrap: 'nowrap'}}>
        <Col span={4} style={{background: '#f0f0f0', marginRight: '10px', padding: '20px', borderRadius: '6px'}}>
            <NavbarConponent />
        </Col>
        <Col span={20} style={{background: '#f0f0f0'}}>
            <CardConponent />
        </Col>
        
    </Row>
  )
}

export default TypeProductPage