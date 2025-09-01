import React from 'react'
import { Row, Col } from 'antd';
import img from '../images/products/product1.png';   

function productitems() {
  return (
    <div>
        <Row>
            <Col span={12}>
            <div className="mainDetails-images">
                <img src={img} alt="Product" />
            </div>
            </Col>
             <Col span={12}>
             <div className="mainDetails">
                
             </div>
             </Col>
        </Row>
    </div>
  )
}

export default productitems
