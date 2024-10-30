import PurchaseOrder from '../models/PurchaseOrder.js';
import Item from '../models/items.js';
import { v4 as uuidV4 } from 'uuid';

export const createOrder = async (req, res) => {
    try {
        const { supplierId, items } = req.body;

        if (!supplierId || !items || items.length === 0) {
            return res.status(400).json({ error: "Supplier and items are required." });
        }

        let itemTotal = 0;
        let discountTotal = 0;
        let netAmount = 0;

        for (const item of items) {
            const { itemId, orderQty, discount, packingUnit } = item;
            const fetchedItem = await Item.findById(itemId);

            if (!fetchedItem) {
                return res.status(404).json({ error: `Item with ID ${itemId} not found.` });
            }

            const itemAmount = orderQty * fetchedItem.unitPrice;
            const netItemAmount = Math.max(itemAmount - discount, 0);

            itemTotal += itemAmount;
            discountTotal += discount;
            netAmount += netItemAmount;

            item.itemAmount = itemAmount;
            item.netAmount = netItemAmount;
        }

        if (itemTotal < 0 || netAmount < 0) {
            return res.status(400).json({ error: "Total amounts cannot be negative." });
        }

        const purchaseOrder = new PurchaseOrder({
            orderNo: uuidV4(),
            supplierId,
            items,
            itemTotal,
            discountTotal,
            netAmount,
        });

        await purchaseOrder.save();
        res.status(201).json({ message: "Purchase order created successfully", purchaseOrder });
    } catch (error) {
        console.error("Error creating purchase order:", error.message);
        res.status(500).json({ error: "Error creating purchase order" });
    }
};
