import {combineReducers} from 'redux';

import {authentication} from './Authenticate';
import {registration} from './registerReducer';
import {users, ChangeInfoAccount} from './userReducer';
import {alert} from './alertReducer';
import {accountBalance} from './accountBalanceReducer'

const rootReducer = combineReducers({
    authentication,
    registration,
    users,
    alert,
    accountBalance,
    ChangeInfoAccount,
});

export default rootReducer;
