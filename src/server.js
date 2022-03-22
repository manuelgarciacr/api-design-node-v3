import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { connect } from './utils/db';
import config from './config/index';
import itemRouter from './resources/item/item.router';

export const app = express();

app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));

// Routers

// app.get('/data', (req, res) => {
//     res.json({ message: 'hello' })
// })

// app.post('/data', json(), (req, res) => {
//     console.log('REQ.BODY', req.body);
//     res.status(200).end()
// })
// app.use('/api/user', userRouter);
// app.use('/api/list', listRouter);
app.use('/api/item', itemRouter);

// End Routers

export const start = async () => {
    try {
        await connect();
        app.listen(config.port, () => {
            console.log(`REST API on http://localhost:${config.port}/api`)
        })
    } catch (e) {
        console.error(e)
    }
}
