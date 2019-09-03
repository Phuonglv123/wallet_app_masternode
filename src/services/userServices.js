import {BaseAPI} from "./BaseAPI";

class UserServices extends BaseAPI {
    async getInfoUser() {
        const res = await this.apiCall({
            url: 'account',
            method: 'GET',
            params: null
        });
        return res;
    }

    async getBankAccount() {
        const res = await this.apiCall({
            url: 'balance',
            method: 'GET',
            params: null
        });
        return res
    }

    async changePassAccount(params) {
        const res = await this.apiCall({
            url: 'account/change-password',
            method: 'POST',
            params: params,
        });
        return res;
    }

    async changeProfileAccount(params) {
        const res = await this.apiCall({
            url: 'account',
            method: 'POST',
            params: params,
        });
        return res
    }
}

export default new UserServices();
