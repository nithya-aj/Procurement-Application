import express from 'express'
import { getItems } from '../controllers/item'
const supplier = express.Router()

supplier.get('/items', getItems)

export default supplier