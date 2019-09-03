import React, {Component} from 'react';
import {Col, Row} from "antd";

import './CrowdNodeScene.css';

class CrowdNode extends Component {
    render() {
        return (
            <div id='CrowdNodeScene'>
                <Row gutter={16}>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div>
                                <h1>Crowd-node BALANCE</h1>
                            </div>
                            <div>
                                <span>100 NBL</span>
                                <img src={require('../../res/images/onlylogo.png')} style={{width: '15%'}} alt=""/>
                            </div>
                        </div>

                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div style={{lineHeight: 0.6}}>
                                <h1>INTEREST</h1>
                                <span></span>
                            </div>
                            <div>
                                <span>100 NBL</span>
                                <img src={require('../../res/images/onlylogo.png')} style={{width: '16%'}} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div>
                                <h1>WITHDRAW INTEREST</h1>
                            </div>
                            <div>
                                <span>100 NBL</span>
                                <img src={require('../../res/images/onlylogo.png')} style={{width: '15%'}} alt=""/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default CrowdNode;
