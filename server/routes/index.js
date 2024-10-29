import express from 'express'
import supplier from './supplier.js'
import item from './item.js'

const router = express.Router()

router.use("/supplier", supplier)
router.use("/items", item)

export default router