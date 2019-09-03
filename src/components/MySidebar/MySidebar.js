import React, {Component} from 'react';
import {Icon, Layout, Menu,} from "antd";
import {Link} from "react-router-dom";
import AppURL from "../AppRoute/AppURL";

const {Sider} = Layout;

class MySidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            logo: true,
            breakpoint: null,
            collapsedWidth: undefined,
        }
    }


    componentDidMount(): void {
        let width_1024 = window.matchMedia("(width: 1024px)");
        let width_728 = window.matchMedia("(max-width: 768px)");
        if (width_1024.matches) {
            this.setState({
                collapsed: !this.state.collapsed,
                logo: false
            })
        } else if (width_728.matches) {
            this.setState({
                collapsedWidth: 0
            })
        }
    }

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({collapsed});
    };

    render() {
        return (
            <Sider collapsible
                   collapsed={this.state.collapsed}
                   onCollapse={this.onCollapse}
                   breakpoint="sm"
                   collapsedWidth={this.state.collapsedWidth}>
                <div className="logo">
                    <img src={require('../../res/images/logo.png')} alt=""/>
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['dashboard']}>
                    <Menu.Item key="user">
                        <Link to={AppURL.user()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"user"}/>
                            <span style={{fontSize: '18px'}}>NAME</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="dashboard">
                        <Link to={AppURL.dashboard()}>
                            <Icon type={"dashboard"} style={{fontSize: '25px', color: '#2b627b'}}/>
                            <span style={{fontSize: '18px'}}>Dashboard</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="cash">
                        <Link to={AppURL.cash()}>
                            <Icon type={"wallet"} style={{fontSize: '25px', color: '#2b627b'}}/>
                            <span style={{fontSize: '18px'}}>Cash</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="crowdNode">
                        <Link to={AppURL.crowdNode()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"appstore"}/>
                            <span style={{fontSize: '18px'}}>CrowdNode</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="setting">
                        <Link to={AppURL.setting()}>
                            <Icon style={{fontSize: '25px', color: '#2b627b'}} type={"setting"}/>
                            <span style={{fontSize: '18px'}}>Setting</span>
                        </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
}

export default MySidebar;
