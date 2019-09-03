import React, {Component} from 'react';
import {Col, Row, Icon, Divider, Table} from "antd";

import './CashScene.css';

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];

class CashScene extends Component {
    render() {
        return (
            <div id='cashScene'>
                <Row gutter={16}>
                    <Col  sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div className='item-img'>
                                <img src={require('../../res/images/Untitled-1.png')} alt=""/>
                                <h1>CASH BALANCE</h1>
                            </div>
                            <div className='item-footer'>
                                <span>$ 20.00</span>
                            </div>
                        </div>

                    </Col>
                    <Col  sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div className='item-img'>
                                <img src={require('../../res/images/barcode.png')} alt=""/>
                                <div className='title-item'>
                                    <img src={require('../../res/images/icon-bitcoin.png')} alt=""/>
                                    <h1>Bitcoin (BTCUSDT)</h1>
                                </div>
                            </div>
                            <div className='item-footer-spec'>
                                <span>$ 20.00</span>
                                <Icon type={"copy"}/>
                            </div>
                        </div>

                    </Col>
                    <Col sm={24} md={8} lg={8} xl={8}>
                        <div className='item-crowd'>
                            <div className='item-img'>
                                <img src={require('../../res/images/barcode.png')} alt=""/>
                                <div className='title-item'>
                                    <img src={require('../../res/images/icon-bitcoinB.png')} alt=""/>
                                    <h1>Bitcoin (ETHUSDT)</h1>
                                </div>
                            </div>
                            <div className='item-footer-spec'>
                                <span>$ 20.00</span>
                                <Icon type={"copy"}/>
                            </div>
                        </div>

                    </Col>
                </Row>
                <div style={{margin: 20}}>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat iste, laboriosam quaerat soluta unde.</span>
                </div>
                <div>
                    <Divider/>
                </div>
                <div className='table-cash'>
                    <div className='deposit'>
                        <span>DEPOSIT HISTORY</span>
                    </div>
                    <div>
                        <Table columns={columns} dataSource={data} size="middle" bordered={true} pagination={false}
                               style={{backgroundColor: '#2b627b', borderRadius: 8}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CashScene;
