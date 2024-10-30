import mongoose from "mongoose";
import { v4 as uuidV4 } from 'uuid';

const itemSchema = new mongoose.Schema(
    {
        itemNo: {
            type: String,
            required: true,
            unique: true,
            default: () => uuidV4()
        },
        itemName: {
            type: String,
            required: true,
        },
        inventoryLocation: {
            type: String,
            required: true,
        },
        brand: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        supplier: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "supplier",
            required: true,
        },
        stockUnit: {
            type: String,
            required: true,
        },
        unitPrice: {
            type: Number,
            required: true,
        },
        itemImages: [{
            type: String,
            required: true,
        }],
        status: {
            type: String,
            enum: ["Enabled", "Disabled"],
            default: "Enabled",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("item", itemSchema);
