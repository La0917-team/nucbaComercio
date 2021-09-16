import http from 'http';
import {Server} from 'socket.io';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

// Importamos los routers al server
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';
import orderRouter from './routers/orderRouter.js';
import uploadRouter from './routers/uploadRouter.js';
import { Adapter } from 'socket.io-adapter';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

mongoose.connect(process.env.MONGODB_URL || 'ruta estatica local', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

// Definir los returns de nuestra API

app.use('/api/uploads', uploadRouter);
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('api/orders', orderRouter);

// Llamamos a APIs de terceros como Paypal o Stripe
app.get('/api/config/paypal', (req, res) =>{
    
})