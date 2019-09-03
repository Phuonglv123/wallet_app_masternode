import axios from 'axios';
import config from '../config/config';
import {authHeader} from "../helper/authHeader";

let jwt = null;

class Auth {
    constructor() {
        this.apiUrl = config.API_URL;

    }

    async login(params) {
        let res = await this.apiCall({
            url: 'authenticate',
            method: 'POST',
            params: params
        });
        return res;
    }

    logOut = () => {
        localStorage.removeItem('user');
        jwt = null;
    };

    getUser() {
        if (jwt) {
            return jwt.user;
        } else {
            return null;
        }
    };

    saveUser(user) {
        try {
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
            }
        } catch (e) {
            console.log(e);
        }
    };

    loadUser() {
        try {
            let user = localStorage.getItem('user');
            if (user) {
                user = JSON.parse(user);
            }
            if (user && user.token) {
                jwt = user;
                let token = user.token;
                this.token = token;
            }
        } catch (e) {
            console.log(e);
        }

    }

    async apiCall(option: Option & { token: string }) {
        option.method = option.hasOwnProperty('method') ? option.method : 'GET';
        option.params = option.hasOwnProperty('params') ? option.params : null;
        let headers = authHeader();
        try {
            const res = await axios({
                method: option.method,
                headers: headers,
                url: `${this.apiUrl}${option.url}`,
                data: option.params,
                validateStatus: status => {
                    return true;
                },
            });
            return res.data;
        } catch (e) {
            console.log(e)
        }
    }
}

export default new Auth();
