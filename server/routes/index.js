import express from 'express'
import uploadRouter from '../controllers/upload.js'
import supplier from './supplier.js'

const router = express.Router()

router.use("/supplier", supplier)
router.use("/upload", uploadRouter)

export default router