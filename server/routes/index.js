import express from 'express'
import uploadRouter from '../controllers/upload.js'
import supplier from './supplier.js'
import item from './item.js'

const router = express.Router()

router.use("/supplier", supplier)
router.use("/items", item)
router.use("/upload", uploadRouter)

export default router