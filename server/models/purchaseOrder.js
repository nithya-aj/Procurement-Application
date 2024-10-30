import mongoose from 'mongoose'

const purchaseOrderSchema = new mongoose.Schema({
    orderNo: {
        type: String,
        required: true,
        unique: true,
        default: () => uuidV4()
    },
    orderDate: {
        type: Date,
        default: Date.now,
    },
    supplierId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'supplier',
        required: true,
    },
    items: [
        {
            itemId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'item',
                required: true,
            },
            packingUnit: {
                type: String,
                required: true,
            },
            orderQty: {
                type: Number,
                required: true,
                min: 1,
            },
            itemAmount: {
                type: Number,
                required: true,
            },
            discount: {
                type: Number,
                default: 0,
            },
            netAmount: {
                type: Number,
                required: true,
            },
        }
    ],
    itemTotal: {
        type: Number,
        required: true,
    },
    discountTotal: {
        type: Number,
        required: true,
    },
    netAmount: {
        type: Number,
        required: true,
    }
}, { validate: true }); 


export default mongoose.model("PurchaseOrder", purchaseOrderSchema);