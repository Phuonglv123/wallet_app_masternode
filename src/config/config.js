import {IS_STAGE} from './env';

class ConfigDEV {
    API_URL = 'http://localhost:8080/api/';
}

class ConfigSTAG {
    API_URL = 'http://45.77.241.228:8088/api/';
}

class ConfigPROD {
    API_URL = 'http://45.77.241.228:8088/api/';
}


const config = process.env.NODE_ENV === 'development' ? IS_STAGE ? new ConfigSTAG() : new ConfigDEV() : new ConfigPROD();
// const config = process.env.NODE_ENV === 'development' ? new ConfigSTAG() : new ConfigPROD();

export default config;
