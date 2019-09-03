import {userConstant} from '../constants/userConstant';
import {history} from '../helper/history';
import AppURL from "../components/AppRoute/AppURL";
import {authHeader} from "../helper/authHeader";
import Auth from "../services/Auth";
import userServices from "../services/userServices";

export const userActions = {
    login,
    logout,
    getInfoUserAction,
    getBalanceAccount,
    ChangeInfoAccount
};

function login({username, password, secCode}) {
    return dispatch => {
        dispatch(request());
        Auth.login({username, password, secCode})
            .then((res) => {
                dispatch(success(res));
                Auth.saveUser(res.id_token);
                authHeader(res.id_token);
                history.push(AppURL.home())
            })
            .catch((error) => {
                dispatch(failure(error))
            })
    };

    function request(user) {
        return {type: userConstant.LOGIN_REQUEST, user}
    }

    function success(user) {
        return {type: userConstant.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstant.LOGIN_FAILURE, error}
    }
}

function logout() {
    Auth.logOut();
    history.push(AppURL.login());
    return {type: userConstant.LOGOUT}

}

// function register(user) {
//     return dispatch => {
//         dispatch(request(user));
//
//         userService.register(user)
//             .then(
//                 user => {
//                     dispatch(success());
//                     history.push('/login');
//                     dispatch(alertAction.success('Registration successful'));
//                 },
//                 error => {
//                     dispatch(failure(error));
//                     dispatch(alertAction.error(error));
//                 }
//             );
//     };
//
//     function request(user) {
//         return {type: userConstant.REGISTER_REQUEST, user}
//     }
//
//     function success(user) {
//         return {type: userConstant.REGISTER_SUCCESS, user}
//     }
//
//     function failure(error) {
//         return {type: userConstant.REGISTER_FAILURE, error}
//     }
// }

function getInfoUserAction() {
    return dispatch => {
        dispatch(request());
        userServices.getInfoUser()
            .then((users) => {
                dispatch(success(users));
                return users;
            })
            .catch((error) => {
                dispatch(failure(error))
            });
    };

    function request() {
        return {type: userConstant.GETALL_REQUEST}
    }

    function success(users) {
        return {type: userConstant.GETALL_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstant.GETALL_FAILURE, error}
    }
}

// function ChangePassAccount(password) {
//     return dispatch => {
//         dispatch(request());
//         userServices.changePassAccount(password)
//             .then((users_edit) => {
//                 dispatch(success(users_edit));
//                 return users_edit;
//             })
//             .catch((error) => {
//                 dispatch(failure(error))
//             });
//     };
//
//     function request() {
//         return {type: userConstant.EDIT_ACCOUNT_REQUEST}
//     }
//
//     function success(users_edit) {
//         return {type: userConstant.EDIT_ACCOUNT_SUCCESS, users_edit}
//     }
//
//     function failure(error) {
//         return {type: userConstant.EDIT_ACCOUNT_FAILURE, error}
//     }
// }

function ChangeInfoAccount(account) {
    return dispatch => {
        dispatch(request());
        userServices.changeProfileAccount(account)
            .then((users_edit) => {
                dispatch(success(users_edit));
                return users_edit;
            })
            .catch((error) => {
                dispatch(failure(error))
            });
    };

    function request() {
        return {type: userConstant.EDIT_ACCOUNT_REQUEST}
    }

    function success(users_edit) {
        return {type: userConstant.EDIT_ACCOUNT_SUCCESS, users_edit}
    }

    function failure(error) {
        return {type: userConstant.EDIT_ACCOUNT_FAILURE, error}
    }
}

function getBalanceAccount() {
    return dispatch => {
        dispatch(request());
        userServices.getBankAccount()
            .then(accountBalance => {
                dispatch(success(accountBalance));
                return accountBalance;
            })
            .catch((error) => {
                dispatch(failure(error))
            })
    };

    function request() {
        return {type: userConstant.GETACCOUNTBANK_REQUEST}
    }

    function success(accountBalance) {
        return {type: userConstant.GETACCOUNTBANK_SUCCESS, accountBalance}
    }

    function failure(accountBalance) {
        return {type: userConstant.GETACCOUNTBANK_FAILURE, accountBalance}
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
//     return dispatch => {
//         dispatch(request(id));
//
//         userService.delete(id)
//             .then(
//                 user => {
//                     dispatch(success(id));
//                 },
//                 error => {
//                     dispatch(failure(id, error));
//                 }
//             );
//     };
//
//     function request(id) {
//         return {type: userConstant.DELETE_REQUEST, id}
//     }
//
//     function success(id) {
//         return {type: userConstant.DELETE_SUCCESS, id}
//     }
//
//     function failure(id, error) {
//         return {type: userConstant.DELETE_FAILURE, id, error}
//     }
// }
