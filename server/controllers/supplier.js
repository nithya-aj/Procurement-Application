import Supplier from "../models/supplier.js";

// fetching all suppliers
export const getSuppliers = async (req, res) => {
    try {
        const allSuppliers = await Supplier.find({}).sort({ createdAt: -1 });
        return res.status(200).json(allSuppliers);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching suppliers", error: error.message });
    }
};

// creating new supplier
export const createSupplier = async (req, res) => {
    try {
        // checking for any empty fields
        const isEmpty = Object.values(req.body).some((v) => v === "");
        if (isEmpty) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // Create the supplier
        const newSupplier = await Supplier.create({ ...req.body });
        console.log(newSupplier, 'newSupplier');

        // Send success response
        return res.status(201).json({ message: "Supplier created successfully", supplier: newSupplier });
    } catch (error) {
        console.error("Error creating supplier:", error);
        return res.status(500).json({ message: "Failed to create supplier", error: error.message });
    }
};

// update supplier
export const updateSupplier = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedSupplier = await Supplier.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedSupplier) {
            return res.status(404).json({ message: "Supplier not found." });
        }

        return res.status(200).json({ message: "Supplier updated successfully", supplier: updatedSupplier });
    } catch (error) {
        return res.status(500).json({ message: "Error updating supplier", error: error.message });
    }
}

// delete supplier
export const deleteSupplier = async (req, res) => {
    try {
        const { id } = req.params;  
        const deletedSupplier = await Supplier.findByIdAndDelete(id);

        if (!deletedSupplier) {
            return res.status(404).json({ message: "Supplier not found." });
        }

        return res.status(200).json({ message: "Supplier deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting supplier", error: error.message });
    }
};
