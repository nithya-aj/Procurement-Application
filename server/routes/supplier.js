import express from 'express'
import { getSuppliers } from '../controllers/supplier.js'
const supplier = express.Router()

supplier.get('/suppliers', getSuppliers)

export default supplier