import React, {Component} from 'react';
import {Card, Col, Row, Button} from "antd";
import {withTranslation} from 'react-i18next';
import './CardDashboard.css';

class CardDashboard extends Component {

    render() {
        const {t, i18n} = this.props;
        return (
            <div id='card-dashboard'>
                <Row gutter={64}>
                    <Col span={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={32}>
                                <Col span={12}>
                                    <div className='title-card'>
                                        <span>Transaction</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash1.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={32}>
                                <Col span={12}>
                                    <div className='title-card'>
                                        <span>Sent NLB</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash2.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card className='list-card' bordered={false}>
                            <Row gutter={32}>
                                <Col span={12}>
                                    <div className='title-card'>
                                        <span>Receive NLB</span>
                                    </div>
                                    <div className='btn-dashboard'>
                                        <Button>View</Button>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div>
                                        <img src={require('../../res/images/icon-dash3.png')} alt="" width={'100%'}/>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default withTranslation('common')(CardDashboard);
