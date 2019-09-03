import React, {Component} from 'react';
import {Breadcrumb, Icon} from 'antd';

class MyBreadcrumb extends Component {
    render() {
        return (
            <Breadcrumb style={{margin: '16px 0'}}>
                <Breadcrumb.Item href="">
                    <Icon type="home"/>
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <Icon type="user"/>
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Application</Breadcrumb.Item>
            </Breadcrumb>
        );
    }
}

export default MyBreadcrumb;