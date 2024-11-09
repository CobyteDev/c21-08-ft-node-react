const cors = require('cors');
import morgan from 'morgan';
import express from 'express';
import app from './app';
import { AppDataSource } from './data-source';

import userAuth from './routes/auth.route';
import categoryRoutes from './routes/category.route';
import orderRoutes from './routes/clientOrder.route';
import OrderProductRoutes from './routes/orderProduct.route';
import PaymentsRoutes from './routes/preference.route';
import productRoutes from './routes/product.route';
import promotionRoutes from './routes/promotion.route';
import userRoutes from './routes/user.route';
import iaRoutes from './routes/ia.route';
import WebHooksRoutes from './routes/webhooks.route';
import { errorHandler } from './handlers/errorHandler';
const PORT = process.env.PORT || 3170;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully');

    app.use(morgan('combined'));
    app.use(express.json());
    app.use(cors());
    app.use('/user', userRoutes);
    app.use('/auth', userAuth);
    app.use('/product', productRoutes);
    app.use('/category', categoryRoutes);
    app.use('/promotion', promotionRoutes);
    app.use('/order', orderRoutes);
    app.use('/cart', OrderProductRoutes);
    app.use('/', iaRoutes);
    app.use('/payments', PaymentsRoutes);
    app.use('/webhook', WebHooksRoutes);
    app.use('/', iaRoutes);

    //Middleware de manejo de errores.
    app.use(errorHandler);

    app.listen(PORT, () => {
      console.log(`Port running in port ${PORT}`);
    });
  })
  .catch(error => {
    console.error('Error during Data Source initialization:', error);
  });
