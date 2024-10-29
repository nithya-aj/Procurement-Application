import Supplier from "../models/supplier.js";

// fetching all suppliers
export const getSuppliers = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(error.message);
    }
};