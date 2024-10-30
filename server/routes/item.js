import express from 'express';
import { createItem, deleteItem, getItemById, getItems, updateItem } from '../controllers/item.js';

const item = express.Router();

item.get('/all', getItems);
item.get('/:id', getItemById);
item.post('/create', createItem);
item.put('/:id', updateItem);
item.delete('/:id', deleteItem);

export default item;
