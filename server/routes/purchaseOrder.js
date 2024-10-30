import express from 'express';
import { createOrder } from '../controllers/purchaseOrder.js';

const purchase = express.Router();

purchase.post('/purchase-orders', createOrder);

export default purchase;
