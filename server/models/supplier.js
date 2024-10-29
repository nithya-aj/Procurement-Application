import mongoose from "mongoose";
import { v4 as uuidV4 } from 'uuid'

const supplierSchema = new mongoose.Schema(
    {
        supplierNo: {
            type: String,
            required: true,
            unique: true,
            default: uuidV4
        },
        supplierName: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        taxNo: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        mobileNo: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/\S+@\S+\.\S+/, 'Please provide a valid email address.'],
        },
        status: {
            type: String,
            enum: ["Active", "Inactive", "Blocked"],
            default: "Active",
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("supplier", supplierSchema)