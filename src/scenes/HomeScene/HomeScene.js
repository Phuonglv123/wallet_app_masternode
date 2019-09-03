import React, {Component} from 'react';
import {userActions} from "../../actions/userAction";
import {connect} from "react-redux";
import {Table} from "antd";
import {withTranslation} from 'react-i18next';

class HomeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: true
        }
    }


    handleSubmit = async (e) => {
        await this.props.getAll();
        this.setState({
            active: !this.state.active
        })
    };

    handleBankAccount = async (e) => {
        await this.props.getBankAccount();
        this.setState({
            active: !this.state.active
        })
    };

    logOut = async (e) => {
        this.props.logout()
    };

    render() {
        let table = null;
        if (this.state.active === true) {
            table = <Table dataSource={this.props.users.items} columns={columns}/>;
        } else {
            table = <Table dataSource={this.props.accountBank.items} columns={columnsBank}/>;
        }
        const {t, i18n} = this.props;

        return (
            <div>
                <button onClick={this.handleSubmit.bind(this)}>getuser</button>
                <button onClick={this.handleBankAccount.bind(this)}>bankAccount</button>
                <button onClick={this.logOut.bind(this)}>Logout</button>
                {table}
                <h4>{t('welcome.title')}</h4>
            </div>
        );
    }
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Login',
        dataIndex: 'login',
        key: 'login',
    },
    {
        title: 'Last name',
        dataIndex: 'lastName',
        key: 'LastName',
    }, {
        title: 'First name',
        dataIndex: 'firstName',
        key: 'FirstName',
    }, {
        title: 'Email',
        dataIndex: 'email',
        key: 'Email',
    },
];

const columnsBank = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: 'Balance',
        dataIndex: 'balance',
        key: 'balance',
    }, {
        title: 'User',
        dataIndex: 'userLogin',
        key: 'user',
    },
];

function mapStateToProps(state) {
    const {loggingIn} = state.authentication;
    const {users, accountBank} = state;
    return {loggingIn, users, accountBank};
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAll: () => {
            dispatch(userActions.getAll());

        },
        getBankAccount: () => {
            dispatch(userActions.getBankAccount())
        },
        logout: () => {
            dispatch(userActions.logout());
        }
    }
}

// const mapDispatchToProps = {
//     getAll: userActions.getAll()
// }

const connectHome = connect(mapStateToProps, mapDispatchToProps)(HomeScene);

export default withTranslation('common')(connectHome);
