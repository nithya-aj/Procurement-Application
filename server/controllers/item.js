import multer from "multer";
import Item from "../models/items.js";
import dotenv from 'dotenv';
import { uploadMultipleImages } from "./upload.js";

dotenv.config();

// Fetching all items
export const getItems = async (req, res) => {
    try {
        const allItems = await Item.find({}).populate('supplier');
        return res.status(200).json(allItems);
    } catch (error) {
        return res.status(500).json({ message: "Error fetching items", error: error.message });
    }
};

// Creating new item
export const createItem = async (req, res) => {
    uploadMultipleImages(req, res, async (err) => {
        if (err) {
            return res.status(500).json({ message: "Image upload failed", error: err.message });
        }

        try {
            // Extract image URLs from req.files
            const imageUrls = req.files.map(file => `/${file.path}`);

            // Create the item
            const newItem = await Item.create({
                ...req.body,
                itemImages: imageUrls, // Assign the URLs to the itemImages field
            });

            return res.status(201).json({ message: "Item created successfully", item: newItem });
        } catch (error) {
            return res.status(500).json({ message: "Failed to create item", error: error.message });
        }
    });
};

// Update item
export const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedItem = await Item.findByIdAndUpdate(id, req.body, { new: true });

        if (!updatedItem) {
            return res.status(404).json({ message: "Item not found." });
        }

        return res.status(200).json({ message: "Item updated successfully", item: updatedItem });
    } catch (error) {
        return res.status(500).json({ message: "Error updating item", error: error.message });
    }
};

// Delete item
export const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedItem = await Item.findByIdAndDelete(id);

        if (!deletedItem) {
            return res.status(404).json({ message: "Item not found." });
        }

        return res.status(200).json({ message: "Item deleted successfully." });
    } catch (error) {
        return res.status(500).json({ message: "Error deleting item", error: error.message });
    }
};
