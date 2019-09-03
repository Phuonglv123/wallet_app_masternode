import React, {Component} from 'react';
import {Icon, Layout, Dropdown, Menu} from "antd";
import {withTranslation} from 'react-i18next';

const {Header} = Layout;
const {SubMenu} = Menu;

class MyHeader extends Component {

    render() {
        const {t, i18n} = this.props;
        const menu = (
            <Menu>
                <SubMenu title="Languages">
                    <Menu.Item onClick={() => i18n.changeLanguage('en')}>English</Menu.Item>
                    <Menu.Item onClick={() => i18n.changeLanguage('vi')}>Vietnamese</Menu.Item>
                </SubMenu>
            </Menu>
        );
        return (
            <Header className='headerApp'>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItem: 'center'}}>
                    <div></div>
                    <div style={{display: 'flex', justifyContent: 'center', alignItem: 'center'}}>
                        <div style={{marginRight: '20px'}}>
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" href="#">
                                    <Icon type={"user"}  style={{ color: "white", fontSize: 23}}/>
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                </div>

            </Header>
        );
    }
}

export default withTranslation('common')(MyHeader);
