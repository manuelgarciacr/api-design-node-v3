// import { merge } from 'lodash'
import pkg from 'lodash';
const { merge } = pkg;
const env = process.env.NODE_ENV || 'development';
import { config as devConfig } from './dev';
import { config as testConfig } from './testing';

const baseConfig = {
    env,
    isDev: env === 'development',
    isTest: env === 'testing',
    port: 3000,
    secrets: {
        jwt: process.env.JWT_SECRET,
        jwtExp: '100d'
    }
}

let envConfig = {}

switch (env) {
    case 'dev':
    case 'development':
        envConfig = devConfig;
        break;
    case 'test':
    case 'testing':
        envConfig = testConfig
        break
    default:
        envConfig = devConfig;
}

export default merge(baseConfig, envConfig)
