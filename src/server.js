import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import { connect } from './utils/db'
import config from './config/index';

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(morgan('dev'))

export const start = async () => {
    try {
        await connect()
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}
