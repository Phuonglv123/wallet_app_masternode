import React, {Component} from 'react';
import {Button, Col, Icon, Row, Form, Input, Select} from "antd";

import './SettingScene.css'
import {userActions} from "../../actions/userAction";
import {connect} from "react-redux";
import userServices from "../../services/userServices";

const {Option} = Select;

class SettingScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            langKey: "",
            firstName: '',
            lastName: '',
            email: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(): void {
        this.props.getInfoAccount();
    }

    compareToFirstPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    validateToNextPassword = (rule, value, callback) => {
        const {form} = this.props;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], {force: true});
        }
        callback();
    };

    handleConfirmBlur = e => {
        const {value} = e.target;
        this.setState({confirmDirty: this.state.confirmDirty || !!value});
    };

    handleSubmitPass = e => {
        e.preventDefault();
        this.props.form.validateFields(['NewPassword', 'NewPasswordConfirm'], (err, values) => {
            if (!err) {
                // this.props.changePassAccount(this.state.newPassword);
            }
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let activated = this.activated.value;
        let imageUrl = this.imageUrl.value;
        let login = this.login.value;
        const {firstName, LastName, email, langKey} = this.state;
        this.props.form.validateFields(['FirstName', 'LastName', 'E-mail', 'Language'], async (err, values) => {
            if (!err) {
                let res = await userServices.changeProfileAccount({
                    activated,
                    imageUrl,
                    login,
                    firstName,
                    langKey,
                    LastName,
                    email
                })
            }
        });
    };

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        const {users} = this.props;
        return (
            <div id='setting-scene'>
                <div className='button-dashboard'>
                    <div>
                        <Button>
                            <img src={require('../../res/images/left.png')} style={{width: '30px', marginRight: 10}}
                                 alt=""/>
                            Send
                        </Button>
                    </div>
                    <div>
                        <Button>
                            <img src={require('../../res/images/right.png')}
                                 style={{width: '30px', marginRight: 10}} alt=""/>
                            Request
                        </Button>
                    </div>
                </div>
                <div>
                    <Row gutter={32}>
                        {Object.values(users).map((i, index) => (
                            <Col span={12} key={index}>
                                <Form onSubmit={this.handleSubmit} className="login-form">
                                    <Input type="hidden" value={i.activated} ref={input => this.activated = input}/>
                                    <Input type="hidden" value={i.imageUrl} ref={input => this.imageUrl = input}/>
                                    <Input type="hidden" value={i.login} ref={input => this.login = input}/>
                                    <Form.Item label="First Name">
                                        {getFieldDecorator('FirstName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your First Name!',
                                                },
                                            ],
                                        })(<Input size={"large"} name='firstName'
                                                  value={this.state.firstName}
                                                  placeholder={i.firstName}
                                                  onChange={this.handleChange}/>)}
                                    </Form.Item>
                                    <Form.Item label="Last Name">
                                        {getFieldDecorator('LastName', {
                                            rules: [
                                                {
                                                    required: true,
                                                    message: 'Please input your Last Name!',
                                                },
                                            ],
                                        })(<Input size={"large"} placeholder={i.lastName}
                                                  setFieldsValue={this.state.lastName} name='lastName'
                                                  onChange={this.handleChange}/>)}
                                    </Form.Item>
                                    <Form.Item label="E-mail">
                                        {getFieldDecorator('E-mail', {
                                            rules: [
                                                {
                                                    type: '',
                                                    message: 'The input is not valid E-mail!',
                                                },
                                                {
                                                    required: true,
                                                    message: 'Please input your E-mail',
                                                },
                                            ],
                                        })(<Input size={"large"} placeholder={i.email} setFieldsValue={this.state.email}
                                                  name='email' onChange={this.handleChange}/>)}
                                    </Form.Item>
                                    <Form.Item label="Language">
                                        <Select size={"large"}
                                                onChange={(e) => {
                                                    this.setState({langKey: e})
                                                }}>
                                            <Option value="en">English</Option>
                                            <Option value="vi">Vietnamese</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item>
                                        <Button size={"large"} htmlType="submit" className="login-form-button">
                                            save
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Col>
                        ))}

                        <Col span={12}>
                            <Form onSubmit={this.handleSubmitPass} className="login-form">
                                <Form.Item label="Password" hasFeedback>
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                            {
                                                validator: this.validateToNextPassword,
                                            },
                                        ],
                                    })(<Input.Password size={"large"} setFieldsValue={this.state.newPassword}
                                                       name='newPassword'
                                                       onChange={this.handleChange}/>)}
                                </Form.Item>
                                <Form.Item label="Password strength" hasFeedback>
                                    <div className='strength'>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Form.Item>
                                <Form.Item label="Confirm Password" hasFeedback>
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please confirm your password!',
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            },
                                        ],
                                    })(<Input.Password size={"large"} onBlur={this.handleConfirmBlur}/>)}
                                </Form.Item>
                                <Form.Item>
                                    <Button size={"large"} htmlType="submit" className="login-form-button">
                                        save
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {accountBalance, users} = state;
    return {accountBalance, users};
}

const mapDispatchToProps = dispatch => {
    return {
        ChangeInfoAccount: (account) => {
            dispatch(userActions.ChangeInfoAccount(account))
        },
        getInfoAccount: () => {
            dispatch(userActions.getInfoUserAction())
        }
    };
};
const WrappedSettingForm = Form.create({name: 'register'})(SettingScene);
const connectSetting = connect(mapStateToProps, mapDispatchToProps)(WrappedSettingForm)


export default connectSetting;
