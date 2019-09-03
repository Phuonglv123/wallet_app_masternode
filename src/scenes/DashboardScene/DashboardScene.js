import React, {Component} from 'react';
import {Button, Icon} from "antd";
import {withTranslation} from 'react-i18next';
import {userActions} from "../../actions/userAction";
import {connect} from "react-redux";

import './DashboardScene.css';

class DashboardScene extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount(): void {
        this.props.getBalanceAccount();
    }


    render() {
        const {t, i18n} = this.props;
        return (
            <div id='dashboard-scene'>
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
                    <div className='balance-account'>
                        <div>
                            <span>YOUR BALANCE</span>
                        </div>

                        <div className='number'>
                            <span>{this.props.accountBalance ? this.props.accountBalance.balance : 0} NLB</span>
                            <img src={require('../../res/images/onlylogo.png')} alt="" style={{width: '15%'}}/>
                        </div>

                    </div>
                </div>
            </div>
        )
            ;
    }
}

function mapStateToProps(state) {
    const {accountBalance} = state;
    return {accountBalance};
}

const mapDispatchToProps = dispatch => {
    return {
        getBalanceAccount: () => {
            dispatch(userActions.getBalanceAccount())
        }
    };
};

const dashboardConnect = connect(mapStateToProps, mapDispatchToProps)(DashboardScene)

export default withTranslation('common')(dashboardConnect);
