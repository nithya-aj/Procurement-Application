import Items from "../models/items.js";

// fetching all suppliers
export const getItems = async (req, res) => {
    try {

    } catch (error) {
        return res.status(500).json(error.message);
    }
};