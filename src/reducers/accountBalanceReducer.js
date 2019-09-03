import {userConstant} from '../constants/userConstant';

const initialState = {};

export function accountBalance(state = initialState, action) {
    switch (action.type) {
        case userConstant.GETACCOUNTBANK_REQUEST:
            return {
                loading: true
            };
        case userConstant.GETACCOUNTBANK_SUCCESS:
            return action.accountBalance;
        case userConstant.GETACCOUNTBANK_FAILURE:
            return {
                error: action.error
            };
        case userConstant.DELETE_REQUEST:
            // add 'deleting:true' property to user being deleted
            return {
                ...state,
                items: state.items.map(accountBalance =>
                    accountBalance.id === action.id
                        ? {...accountBalance, deleting: true}
                        : accountBalance
                )
            };
        case userConstant.DELETE_SUCCESS:
            // remove deleted user from state
            return {
                items: state.items.filter(accountBalance => accountBalance.id !== action.id)
            };
        case userConstant.DELETE_FAILURE:
            // remove 'deleting:true' property and add 'deleteError:[error]' property to user
            return {
                ...state,
                items: state.items.map(accountBalance => {
                    if (accountBalance.id === action.id) {
                        // make copy of user without 'deleting:true' property
                        const {deleting, ...userCopy} = accountBalance;
                        // return copy of user with 'deleteError:[error]' property
                        return {...userCopy, deleteError: action.error};
                    }

                    return accountBalance;
                })
            };
        default:
            return state
    }
}
