import express from 'express'
import supplier from './supplier.js'
import item from './item.js'
import purchase from './purchaseOrder.js'

const router = express.Router()

router.use("/supplier", supplier)
router.use("/items", item)
router.use("/purchase", purchase)

export default router