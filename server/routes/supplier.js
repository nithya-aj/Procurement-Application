import express from 'express'
import { createSupplier, deleteSupplier, getActiveSuppliers, getSuppliers, updateSupplier } from '../controllers/supplier.js'
const supplier = express.Router()

supplier.get('/all', getSuppliers)
supplier.get('/active', getActiveSuppliers)
supplier.post('/create', createSupplier)
supplier.put('/:id', updateSupplier);
supplier.delete('/:id', deleteSupplier);

export default supplier